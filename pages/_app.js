import 'semantic-ui-css/semantic.min.css';
import 'react-multi-carousel/lib/styles.css';
import 'react-bnb-gallery/dist/style.css';
import '../styles/index.scss';
import '../styles/Feature.scss';
import '../styles/Resume.scss';
import '../styles/Slider.scss';
import '../styles/Cards.scss';

function MyApp({ Component, pageProps }) {
  return (
    <Component {...pageProps} />
  );
}

export default MyApp;
