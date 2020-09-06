// import Layout from '../components/Layout';
import Head from 'next/head';

import dynamic from 'next/dynamic';
import Feature from '../components/Feature';
// import PhotoPortfolio from '';
import KEYS from '../keys';

const ChatBot = dynamic(
  () => import('../components/ChatBot'),
  { ssr: false },
);

const Index = () => (

  <>
    <Head>
      <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.11/semantic.min.css" />
    </Head>
    <div className="main-container">
      <Feature />
      <iframe
        src={`https://webchat.botframework.com/embed/chat-bot-resume?s=${KEYS}`}
        style={{ minWidth: '400px', width: '100%', minHeight: '500px' }}
      />
      <ChatBot />
    </div>
  </>

);
export default Index;
