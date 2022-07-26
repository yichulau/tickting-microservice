import buildClient from '../api/build-client';
import axios from 'axios';


const LandingPage = ({ currentUser }) => {
    return currentUser ? (
      <h1>You are signed in</h1>
    ) : (
      <h1>You are NOT signed in</h1>
    );
  };

LandingPage.getInitialProps = async context =>{
    const client = buildClient(context);
    const { data } = await client.get('/api/users/currentuser');
    return data;

    // if(typeof window === 'undefined'){
    //     // we are on a window
    //     // request should be made to http://ingress-srv......
    //     const { data }=  await axios.get(
    //         'http://ingress-nginx-controller.ingress-nginx.svc.cluster.local/api/users/currentuser', 
    //         {
    //             headers: req.headers
    //         }
    //     );
    //     return data;
    // } else {
    //     // we are on the browser
    //     // request can be made with a base url of ''
    //     const { data } = await axios.get('/api/users/currentuser');
    //     return data;
    // }
};

export default LandingPage;