import Link from 'next/link';
import buildClient from '../api/build-client';

const LandingPage = ({ currentUser, tickets }) => {
  console.log(tickets);

  const ticketList = tickets.map(ticket => {
    return (
      <tr key={ticket.id}>
        <td>{ticket.title}</td>
        <td>{ticket.price}</td>
        <td>
          <Link href="/tickets/[ticketId]" as={`/tickets/${ticket.id}`}>
            <a>View</a>
          </Link>
        </td>
      </tr>
    )
  })

  return (
      <div>
        <h1>Tickets</h1>
        <table className='table'>
          <thead>
            <tr>
              <th>Title</th>
              <th>Price</th>
              <th>Link</th>
            </tr>
          </thead>
          <tbody>
            {ticketList}
          </tbody>
        </table>
      </div>
  );
};

LandingPage.getInitialProps = async (context, client, currentUser) => {
  // console.log('LANDING PAGE!');
  // const client = buildClient(context);

  // const { data } = await client.get('/api/users/currentuser'); // this is the problem
  // console.log(data, "sadsadsa");
  // return data;
  const { data } = await client.get('/api/tickets');

  return { tickets: data };
};

export default LandingPage;
