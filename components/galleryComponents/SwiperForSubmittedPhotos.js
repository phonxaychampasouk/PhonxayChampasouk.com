import SwiperCore, {
  Navigation, Pagination, Scrollbar, A11y, EffectCoverflow,
} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, EffectCoverflow]);

const SwiperForSubmittedPhotos = ({ displaySubmittedPhotos }) => {
  const slides = displaySubmittedPhotos.map((card, index) => (<SwiperSlide key={`slides${index}`} tag="li">{card}</SwiperSlide>));

  return (
    <Swiper
      id="swiper-main"
      tag="section"
      wrapperTag="ul"
      navigation
      pagination
    >
      {slides}

    </Swiper>
  );
};

export default SwiperForSubmittedPhotos;
