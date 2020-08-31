// import Layout from '../components/Layout';
import Head from 'next/head';

import Feature from '../components/Feature';
import PhotoPortfolio from '../components/PhotoPortfolio';

const Index = () => (

  <>
    <Head>
      <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.11/semantic.min.css" />
    </Head>
    <div className="main-container">
      <Feature />
      <PhotoPortfolio />
      
    </div>
  </>

);
export default Index;
