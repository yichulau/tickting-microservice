import { TicketUpdatedListener } from "../ticket-updated-listener";
import mongoose from "mongoose";
import { natsWrapper } from "../../../nats-wrapper";
import { Ticket } from '../../../models/ticket';
import { TicketUpdatedEvent } from "@ticketschu/common";

const setup = async () => {
        // create an instance of the listener
    const listener = new TicketUpdatedListener(natsWrapper.client);

    const ticket = Ticket.build({
        id: new mongoose.Types.ObjectId().toHexString(),
        title: 'concert',
        price: 20,
    });
    await ticket.save(); // we need to calling this manually becase we are tryying to test update function

    // create the fake data event
    const data:TicketUpdatedEvent['data'] = {
        version: ticket.version + 1,
        id: ticket.id,
        title: 'new concert',
        price: 20,
        userId: 'dasdsa'
    }
    // create a fake message object
    // @ts-ignore
    const msg: Message = {
        ack: jest.fn()
    };

    return { listener, data, ticket, msg};
};



it('finds, updates, and saves a ticket', async ()=>{
    const { msg, data, ticket, listener } = await setup();
    await listener.onMessage(data, msg);

    const updatedTicket = await Ticket.findById(ticket.id);

    expect(updatedTicket!.title).toEqual(data.title);
    expect(updatedTicket!.price).toEqual(data.price);
    expect(updatedTicket!.version).toEqual(data.version);
});

it('acks the message', async ()=>{
    const { msg, data,  listener } = await setup();


    await listener.onMessage(data, msg);

    expect(msg.ack).toHaveBeenCalled();
});

it(' does not call ack if the event has a future version or a skip version num', async ()=>{
    const { msg, data, listener, ticket } = await setup();

    data.version = 10;

 

    try {
        await listener.onMessage(data, msg);
    } catch (err) {

    }
    expect(msg.ack).not.toHaveBeenCalled();
})