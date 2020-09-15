import { useState, useRef, useLayoutEffect } from 'react';
import { motion, useViewportScroll, useTransform } from 'framer-motion';
import images from './scrollGalleryComponents/photos';

const ParallaxImage = ({ src, ...style }) => {
  const [elementTop, setElementTop] = useState(0);
  const ref = useRef(null);
  const { scrollY } = useViewportScroll();

  const y = useTransform(scrollY, [elementTop, elementTop + 1], [0, -1], {
    clamp: false,
  });

  useLayoutEffect(() => {
    const element = ref.current;
    setElementTop(element.offsetTop);
  }, [ref]);

  return (
    <div ref={ref} className="image-container">
      <motion.div className="overlay" style={{ ...style, y }} />
      <img className="scroll-image" src={src} alt="" />
    </div>
  );
};

const ScrollGallery = () => (
  <div className="scroll-container">
    {images.map((image) => (
      <ParallaxImage key={image.src} {...image} />
    ))}
  </div>
);

export default ScrollGallery;
