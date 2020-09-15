import { useState, useRef, useLayoutEffect } from 'react';
import { motion, useViewportScroll, useTransform } from 'framer-motion';

const images = [
  {
    src:
    'https://phonxaydocuments.blob.core.windows.net/phonxayblob/tree.jpg',
    background: '#C24B47',
    width: 200,
    left: 300,
    top: 0,
  },
  {
    src:
    'https://phonxaydocuments.blob.core.windows.net/phonxayblob/bug.JPG',
    background: '#A46F4C',
    width: '',
    height: '100%',
    left: '0',
    top: '50%',
  },
  {
    src:
        'https://phonxaydocuments.blob.core.windows.net/phonxayblob/flow.jpg',
    background: '#F2CFA6',
    width: 300,
    height: 200,
    left: '50',
    top: '20%',
  },
  {
    src:
    'https://phonxaydocuments.blob.core.windows.net/phonxayblob/flower.JPG',
    background: '#58742A',
    width: 500,
    height: 400,
    left: 10,
    top: '-50%',
  },
  {
    src:
    'https://phonxaydocuments.blob.core.windows.net/phonxayblob/gardenofgods.JPG',
    background: '#765647',
    width: 600,
    height: 200,
    left: 70,
    top: '-30%',
    zIndex: '-1',
  },
  {
    src:
    'https://phonxaydocuments.blob.core.windows.net/phonxayblob/lake.JPG',
    background: '#F40046',
    width: '120%',
    height: 200,
    left: '0',
    top: '50%',
  },
  {
    src:
    'https://phonxaydocuments.blob.core.windows.net/phonxayblob/landscape.JPG',
    background: '#14555C',
    width: 500,
    height: 400,
    left: '0',
    top: 100,
  },
  {
    src:
    'https://phonxaydocuments.blob.core.windows.net/phonxayblob/landscape2.JPG',
    background: '#F0D2B7',
    width: 500,
    height: 400,
    left: -100,
    top: '50%',
  },
];

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
  <>
    <section className="scroll-gallery">
      <div className="scroll-gallery-container">
        {images.map((image) => (
          <ParallaxImage key={image.src} {...image} />
        ))}
      </div>
    </section>
  </>
);

export default ScrollGallery;
