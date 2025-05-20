import { initProducer } from "./producer";

export async function initKafka() {
  await initProducer();
}
