const RabbitmqQueue = require('../../config/rabbitmq/rabbitmq');
const OrderService = require('../orderService');

class OrderQueueService extends RabbitmqQueue {
  constructor(connectionUrl, queueName) {
    super(connectionUrl, queueName);
  }

  async startConsumer() {
    if (!this.channel) {
      await super.connectRabbitMQ();
    }
    console.log('Monitorando fila...');

    this.channel.consume(
      this.queue,
      async (message) => {
        if (message !== null) {
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

  static getInstance() {
    if (!OrderQueueService.instance) {
      OrderQueueService.instance = new OrderQueueService(
        process.env.URL_RABBITMQ_SERVER,
        process.env.ORDER_QUEUE_NAME
      );
    }
    console.log('Classe RabbitMQ instanciada com sucesso!');

    return OrderQueueService.instance;
  }
}

module.exports = OrderQueueService.getInstance();
