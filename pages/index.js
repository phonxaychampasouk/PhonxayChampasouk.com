import Head from 'next/head';
import Feature from '../components/Feature';
import ChatBot from '../components/ChatBot';
import Gallery from '../components/Gallery';

const Index = () => (

  <>
    <Head>
      <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.11/semantic.min.css" />
    </Head>
    <div className="main-container">
      <Feature />
      <ChatBot />
      <Gallery />
    </div>
  </>

);
export default Index;
