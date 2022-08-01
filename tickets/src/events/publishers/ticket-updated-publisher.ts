import { Publisher, Subjects, TicketUpdatedEvent } from '@ticketschu/common';


export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent>{
    subject: Subjects.TicketUpdated = Subjects.TicketUpdated;
}

