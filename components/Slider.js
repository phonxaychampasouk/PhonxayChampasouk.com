import './Slider.scss';
import Swiper from './sliderComponents/Swiper';

const Slider = () => (
  <div className="slider-collections">
    <div className="slider-collections_container">
      <div className="swiper-container">
        <Swiper />
      </div>
    </div>
  </div>
);

export default Slider;
