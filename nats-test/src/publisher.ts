import nats from 'node-nats-streaming';
import { TicketCreatedPublisher } from './events/ticket-created-publisher';
console.clear();
// stan === client
const stan = nats.connect('ticketing', 'abc', {
    url: 'http://localhost:4222'
});

// cant use async await because nats relies on callback

stan.on('connect', async ()=>{
    console.log('Publisher conncted to NATS');

    const publisher = new TicketCreatedPublisher(stan);

    try {
        await publisher.publish({
            id: '123',
            title: 'concert',
            price: 20
        });
    } catch (err){
        console.log('ererere');
    }

    // const data = JSON.stringify({
    //     id: '123',
    //     title: 'blalal',
    //     price: '132'
    // });

    // stan.publish('ticket:created', data, ()=>{
    //     console.log('Event Published');
    // });
})