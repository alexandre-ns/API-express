const {
  connectRabbitMQ,
  consumeMessages
} = require('../inf/rabbitmq/rabbitmq');
const orderService = require('../services/orderService');

const startConsumer = async () => {
  try {
    const { connection, channel } = await connectRabbitMQ();
    console.log('Consumidor iniciado. Aguardando mensagens...');

    await channel.consume(
      queue,
      async (mensagem) => {
        if (mensagem !== null) {
          console.log('Mensagem recebida:', mensagem.content.toString());

          try {
            //await processarMensagem(mensagem.content.toString());
            await orderService.createOrder(mensagem.content);
            channel.ack(mensagem);
          } catch (error) {
            console.error('Erro ao processar mensagem:', error);
            // Opcionalmente, você pode rejeitar a mensagem ou reenviá-la para a fila
            // channel.nack(mensagem);
          }
        }
      },
      { noAck: false }
    );
  } catch (error) {
    console.error('Erro no consumidor:', error);
    // Tenta reiniciar o consumidor após um breve intervalo
    //setTimeout(iniciarConsumidor, 5000);
  }
  //setTimeout(iniciarConsumidor, 5000);
};

//startConsumer();
module.exports = startConsumer();

/* Função que será chamada quando uma nova mensagem for recebida
  const handleMessage = async (msg) => {
    console.log('--------------------> entrou handleMessage');
    if (msg !== null) {
      try {
        console.log(
          '--------------------> msg retirada da fila e encaminhada para createorder'
        );
        const order = JSON.parse(msg.content.toString());
        console.log('--------------------> createorder executado com sucesso');
        await orderService.createOrder(order);
        //console.log('--------------------> createorder executado com sucesso');
        console.log(`Pedido ${order.id} processado com sucesso.`);
        // Confirmando que a mensagem foi processada
        channel.ack(msg);
      } catch (error) {
        console.error('Erro ao processar pedido:', error);
        // Em caso de erro, a mensagem pode ser reencaminhada ou rejeitada
        channel.reject(msg); // Reencaminha a mensagem para a fila
      }
    }
    console.log('--------------------> saiu handleMessage');
  };

  consumeMessages(handleMessage).catch(console.error);
  console.log('--------------------> saiu startConsumer');*/

//module.exports = startConsumer;
