import { useState } from 'react';
import { wrap } from '@popmotion/popcorn';
import imageData from './valuesComponents/imageData';

import PortalGallery from './valuesComponents/PortalGallery';

const Portal = () => {
  const [[page, direction], setPage] = useState([0, 0]);

  const paginate = (newDirection) => {
    setPage([page + newDirection, newDirection]);
  };

  const imageIndex = wrap(0, imageData.length, page);

  return (
    <section className="portal-outer-container">
      <div className="portal-grid-display">
        <PortalGallery
          paginate={paginate}
          imageIndex={imageIndex}
          direction={direction}
          page={page}
        />
      </div>
      <div className="portal-navigation" />
      <div className="next" role="button" tabIndex={0} onKeyUp={() => paginate(1)} onClick={() => paginate(1)}>
        ‣
      </div>
      <div className="prev" role="button" tabIndex={-1} onKeyDown={() => paginate(-1)} onClick={() => paginate(-1)}>
        ‣
      </div>
    </section>
  );
};

export default Portal;
