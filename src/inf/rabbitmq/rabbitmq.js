const amqp = require('amqplib');
const queue = 'order_queue';
//let channel;

// Função para conectar ao RabbitMQ
/*const connectRabbitMQ = async () => {
  try {
    const connection = await amqp.connect(process.env.RABBITMQServer); //NOTE -  default node address /etc/rabbitmq/rabbitmq-env.conf
    channel = await connection.createChannel();
    await channel.assertQueue(queue, { durable: true });

    console.log('-------> RabbitMQ SERVER conectado');
    return { connection, channel };
  } catch (error) {
    console.error('Erro ao conectar ao RabbitMQ SERVER:', error);
    throw error;
  }
};

// Função para enviar mensagem à fila
const sendMessage = async (message) => {
  const { channel } = await connectRabbitMQ();
  await channel.sendToQueue(queue, Buffer.from(message), { persistent: true });
};

// Função para consumir mensagens da fila
const consumeMessages = async (callback) => {
  const { channel } = await connectRabbitMQ();
  const mensagem = await channel.get(queueName, { noAck: false });
  //await channel.consume(queue, callback, { noAck: false });
  if (mensagem) {
    console.log('Mensagem recebida:', mensagem.content.toString());
    throw new Error('erro ao retirar mensagem da lista');
  }
};*/

class RabbitmqQueue {
  constructor(queueName) {
    if (!RabbitMQSingleton.instance) {
      RabbitMQSingleton.instance = new RabbitMQService(rabbitMQUrl, queueName);
    }
    this.queue = queueName;
    this.channel = null;
    this.connection = null;
    static #instance = null;
  }

  async connectRabbitMQ() {
    try {
      this.connection = await amqp.connect(process.env.RABBITMQServer); //NOTE -  default node address /etc/rabbitmq/rabbitmq-env.conf
      this.channel = await connection.createChannel();
      await channel.assertQueue(this.queue, { durable: true });
    } catch (error) {
      console.error('Erro ao conectar ao RabbitMQ SERVER:', error);
      throw error;
    }
  }

  // Função para enviar mensagem à fila
  async sendMessage(message) {
    if (!this.channel) {
      await this.connectRabbitMQ();
    }
    await this.channel.sendToQueue(this.queue, Buffer.from(message), {
      persistent: true
    });
  }

  // Função para consumir mensagens da fila
  async startConsumer() {
    if (!this.channel) {
      await this.connectRabbitMQ();
    }
    console.log('Consumidor iniciado. Aguardando mensagens...');

    this.channel.consume(
      this.queue,
      async (message) => {
        if (message !== null) {
          console.log('Mensagem recebida:', message.content.toString());
          try {
            await this.processMessage(message.content.toString());
            this.channel.ack(message);
          } catch (error) {
            console.error('Erro ao processar mensagem:', error);
            // Opcionalmente, você pode rejeitar a mensagem ou reenviá-la para a fila
            // this.channel.nack(message);
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

  static getInstance(config = {}) {
    if (!RabbitmqQueue.#instance) {
      RabbitmqQueue.#instance = new Configuracao(config);
    }
    return RabbitmqQueue.#instance;
  }
}

class RabbitMQSingleton {
  constructor() {
    if (!RabbitMQSingleton.instance) {
      RabbitMQSingleton.instance = new RabbitmqQueue(rabbitMQUrl, queueName);
    }
  }

  getInstance() {
    return RabbitMQSingleton.instance;
  }
}

module.exports = {
  RabbitmqQueue,
  RabbitMQSingleton
};
//module.exports = new RabbitmqQueue;