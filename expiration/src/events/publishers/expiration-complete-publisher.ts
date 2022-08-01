import { Subjects, Publisher, ExpirationCompleteEvent } from "@ticketschu/common";


export class ExpirationCompletePublisher extends Publisher<ExpirationCompleteEvent>{
    subject!: Subjects.ExpirationComplete;
    
}