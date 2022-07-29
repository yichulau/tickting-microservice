import { Ticket } from '../ticket';

it('impkements optimistiic concurrencycontrol', async ()=>{
    const ticket = Ticket.build({
        title: 'concert',
        price: 5,
        userId: '3123'
    });

    await ticket.save();
    // fetch the ticket twice

    const firstInstance = await Ticket.findById(ticket.id);
    const secondInstance = await Ticket.findById(ticket.id);

    // make two separate changes to tickes we fetched
    firstInstance!.set({ price: 10 });
    secondInstance!.set({ price: 15 });

    await firstInstance!.save();
    
    //save the sceond isntace


    try{
        await secondInstance!.save();
    } catch (err){
        return;
    }

    throw new Error('Should not reach this ppoint');
});

it('increments the version number on multiple saves', async () => {
    const ticket = Ticket.build({
        title: 'concert',
        price: 20,
        userId: '123'
    });
    
    await ticket.save();

    expect(ticket.version).toEqual(0);
    await ticket.save();
    expect(ticket.version).toEqual(1);
    await ticket.save();
});