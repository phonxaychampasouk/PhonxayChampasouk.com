import Head from 'next/head';
import dynamic from 'next/dynamic';
import FeatureScroll from '../components/FeatureScroll';
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
      <FeatureScroll />
      <DynamicValues />
      <Gallery />
    </div>
  </>

);
export default Index;
