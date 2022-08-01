import { OrderCancelledListener } from "../order-cancelled-listener"
import { natsWrapper } from "../../../nats-wrapper"
import { Ticket } from '../../../models/ticket';
import { OrderCancelledEvent, OrderStatus } from '@ticketschu/common';
import mongoose from "mongoose";
import { Message } from 'node-nats-streaming';

const setup = async () =>{
    // create an instance of the listener
    const listener = new OrderCancelledListener(natsWrapper.client);
    const orderId = new mongoose.Types.ObjectId().toHexString();
    // create and save a ticket
    const ticket = Ticket.build({
        title: 'concert',
        price: 99,
        userId: 'asdf',
    });

    ticket.set({ orderId })
    await ticket.save();

    // create a fake data
    const data: OrderCancelledEvent['data'] = {
        id: new mongoose.Types.ObjectId().toHexString(),
        version: 0,
        ticket: {
            id: ticket.id
        }
    }

    // @ts-ignore
    const msg:Message = {
        ack:jest.fn()
    }
    return { listener, ticket, data, msg, orderId};
};

it('updates the ticket, publishes and event, and acks the msg', async () =>{
    const { msg, data, ticket, orderId, listener} = await setup();

    await listener.onMessage(data,msg);

    const updatedTicket = await Ticket.findById(ticket.id);
    expect(updatedTicket!.orderId).not.toBeDefined();
    expect(msg.ack).toHaveBeenCalled();
    expect(natsWrapper.client.publish).toHaveBeenCalled();
})