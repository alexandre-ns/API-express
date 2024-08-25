const amqp = require('amqplib');
const queue = 'order_queue';
const OrderService = require('../../services/orderService');

class RabbitmqQueue {
  constructor(queueName) {
    this.queue = queueName;
    this.channel = null;
    this.connection = null;
  }

  async connectRabbitMQ() {
    if (!this.connection) {
      try {
        this.connection = await amqp.connect(process.env.RABBITMQServer); //NOTE -  default node address /etc/rabbitmq/rabbitmq-env.conf
        this.channel = await this.connection.createChannel();
        await this.channel.assertQueue(this.queue, { durable: true });
        console.log('RabbitMQ SERVER CONECTADO COM SUCESSO');
      } catch (error) {
        console.error('Erro ao conectar ao RabbitMQ SERVER:', error);
        throw error;
      }
    }
  }

  async sendMessage(message) {
    if (!this.channel) {
      await this.connectRabbitMQ();
    }
    await this.channel.sendToQueue(this.queue, Buffer.from(message), {
      persistent: true
    });
  }

  async startConsumer() {
    if (!this.channel) {
      await this.connectRabbitMQ();
    }
    console.log('Monitorando fila...');

    this.channel.consume(
      this.queue,
      async (message) => {
        if (message !== null) {
          console.log(
            'Mensagem recebida::::',
            message.content.toString(),
            '\n\n[',
            JSON.parse(message.content.toString()),
            ']'
          );
          try {
            await OrderService.createOrder(
              JSON.parse(message.content.toString())
            );
            this.channel.ack(message);
          } catch (error) {
            console.error('Erro ao processar mensagem retirada da fila', error);
          }
        }
      },
      { noAck: false }
    );
  }

  async closeConnection() {
    if (this.channel) {
      await this.channel.close();
    }
    if (this.connection) {
      await this.connection.close();
    }
  }

  static getInstance() {
    if (!RabbitmqQueue.instance) {
      RabbitmqQueue.instance = new RabbitmqQueue(process.env.RABBITMQQUEUENAME);
    }
    console.log('Classe RabbitMQ instanciada com sucesso!');
    return RabbitmqQueue.instance;
  }
}

module.exports = RabbitmqQueue.getInstance();
