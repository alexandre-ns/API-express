const amqp = require('amqplib');

class RabbitmqQueue {
  constructor(connectionUrl, queueName) {
    this.queue = queueName;
    this.channel = null;
    this.connection = null;
    this.urlConection = connectionUrl;
  }

  async connectRabbitMQ() {
    if (!this.connection) {
      try {
        this.connection = await amqp.connect(this.urlConection); //NOTE - process.env.RABBITMQServer default node address /etc/rabbitmq/rabbitmq-env.conf
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

  async closeConnection() {
    if (this.channel) {
      await this.channel.close();
    }
    if (this.connection) {
      await this.connection.close();
    }
  }
}

module.exports = RabbitmqQueue;
