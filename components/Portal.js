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

  const navButtons = (dir, val) => (
    <div className={dir} onClick={() => paginate(val)}>
      ‣
    </div>
  );

  return (
    <section className="portal-outer-container">
      <div className="portal-grid-display">

        <PortalGallery paginate={paginate} imageIndex={imageIndex} direction={direction} page={page} />
      </div>
      <div className="portal-navigation" />
      {navButtons('next', 1)}
      {navButtons('prev', -1)}
    </section>
  );
};

export default Portal;
