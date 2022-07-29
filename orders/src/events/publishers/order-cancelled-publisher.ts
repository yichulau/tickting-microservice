import { Subjects, Publisher, OrderCancelledEvent } from '@ticketschu/common';

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
  subject: Subjects.OrderCancelled = Subjects.OrderCancelled;
}
