import { Kafka, logLevel, Partitioners, Producer } from "kafkajs";

const kafka = new Kafka({
  clientId: "commerce-analytics",
  brokers: ["host.docker.internal:9092"],
  logLevel: logLevel.INFO,
});

const producer: Producer = kafka.producer();

export async function initProducer() {
  await producer.connect();
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
