import { Publisher, OrderCreatedEvent, Subjects } from '@ticketschu/common';

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
  subject: Subjects.OrderCreated = Subjects.OrderCreated;
}
