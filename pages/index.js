// import Layout from '../components/Layout';
import Head from 'next/head';
import Feature from '../components/Feature';
import Slider from '../components/Slider';
import Resume from '../components/Resume';
import '../styles/index.scss';

const Index = () => (
  <>
    <Head>
      <link
        async
        rel="stylesheet"
        href="//cdn.jsdelivr.net/npm/semantic-ui@${props.versions.sui}/dist/semantic.min.css"
      />
      <script
        async
        src="//cdn.jsdelivr.net/npm/semantic-ui@${props.versions.sui}/dist/semantic.min.js"
      />
    </Head>
    <div className="main-container">
      <Feature />
      <Slider />
      <Resume />
    </div>
  </>
);
export default Index;
