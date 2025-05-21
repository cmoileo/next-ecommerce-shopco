import { Kafka, logLevel, Partitioners, Producer } from "kafkajs";

const kafka = new Kafka({
  clientId: "commerce-analytics",
  brokers: ["localhost:9092"],
  logLevel: logLevel.INFO,
});

const producer: Producer = kafka.producer();

export async function initProducer() {
  try {
    await producer.connect();
    console.log("[Kafka] Producer connected");
  } catch (error) {
    console.log(error);
  }
}

export async function sendUserAction(message: any) {
  await producer.send({
    topic: "analytics.user-actions",
    messages: [
      {
        key: message.userId,
        value: JSON.stringify(message),
      },
    ],
  });
}

export default producer;
