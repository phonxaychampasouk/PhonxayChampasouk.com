import 'semantic-ui-css/semantic.min.css';
import '../styles/index.scss';
import '../styles/Feature.scss';
import '../styles/Resume.scss';
import '../styles/Slider.scss';
import '../styles/Cards.scss';
import '../styles/PhotoPortfolio.scss';
import '../styles/SelectedImage.scss';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
import 'swiper/components/effect-coverflow/effect-coverflow.scss';

function MyApp({ Component, pageProps }) {
  return (
    <Component {...pageProps} />
  );
}

export default MyApp;
