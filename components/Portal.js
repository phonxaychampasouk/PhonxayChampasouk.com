import { useState } from 'react';
import { wrap } from '@popmotion/popcorn';
import { images } from './valuesComponents/imagedata';

import PortalGallery from './valuesComponents/PortalGallery';

const Portal = () => {
  const [[page, direction], setPage] = useState([0, 0]);

  const paginate = (newDirection) => {
    setPage([page + newDirection, newDirection]);
  };

  const imageIndex = wrap(0, images.length, page);


  return (
    <section className="portal-outer-container">
      <div className="portal-grid-display">

        <PortalGallery paginate={paginate} imageIndex={imageIndex} direction={direction} page={page} />
      </div>
      <div className="portal-navigation" />
      <div className="next" onClick={() => paginate(1)}>
        ‣
      </div>
      <div className="prev" onClick={() => paginate(-1)}>
        ‣
      </div>
      
    </section>
  );
};

export default Portal;
