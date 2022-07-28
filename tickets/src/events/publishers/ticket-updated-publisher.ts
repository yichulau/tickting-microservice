import { Publisher, Subjects, TicketCreatedEvent } from '@ticketschu/common';


export class TicketUpdatedPublisher extends Publisher<TicketCreatedEvent>{
    subject: Subjects.TicketCreated = Subjects.TicketCreated;
}