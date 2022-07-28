import { Publisher, Subjects, TicketUpdatedEvent } from '@ticketschu/common';


export class TicketCreatedPublisher extends Publisher<TicketUpdatedEvent>{
    subject: Subjects.TicketUpdated = Subjects.TicketUpdated;
}