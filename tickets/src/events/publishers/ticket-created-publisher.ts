import { Publisher, Subjects, TicketCreatedEvent } from '@ticketschu/common';


export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent>{
    subject: Subjects.TicketCreated = Subjects.TicketCreated;
}