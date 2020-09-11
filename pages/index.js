import Head from 'next/head';
import dynamic from 'next/dynamic';
import Feature from '../components/Feature';
import ChatBot from '../components/ChatBot';
import Gallery from '../components/Gallery';
import NavBar from '../components/NavBar';

const DynamicValues = dynamic(
  () => import('../components/Values'),
  { ssr: false },
);
const Index = () => (

  <>
    <Head>
      <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.11/semantic.min.css" />
    </Head>
    <div className="main-container">
      <NavBar />
      <Feature />
      <DynamicValues />
      <ChatBot />
      <Gallery />
    </div>
  </>

);
export default Index;
