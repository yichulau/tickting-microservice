import { Subjects, Publisher, PaymentCreatedEvent } from '@ticketschu/common';


export class PaymentCreatedPublisher extends Publisher<PaymentCreatedEvent>{
    subject: Subjects.PaymentCreated = Subjects.PaymentCreated;
}