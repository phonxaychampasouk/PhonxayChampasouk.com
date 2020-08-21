import React, { useState } from 'react';
import ReactBnbGallery from 'react-bnb-gallery';

const PHOTOS = ['bug.jpg', '/test.png',
  '/scenery.jpg', '/lake.jpg',
  '/flower.jpg', '/test.jpg', '/test.jpg',
  '/test.png', '/test.png',
  '/test.png', '/test.png',
];

const ImageGallery = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button onClick={() => setIsOpen(true)}>
        Open gallery
      </button>
      <ReactBnbGallery
        show={isOpen}
        photos={PHOTOS}
        onClose={() => setIsOpen(false)}
      />
    </>
  );
};

export default ImageGallery;
