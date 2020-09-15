import { useState } from 'react';
import { wrap } from '@popmotion/popcorn';

import PortalGallery from './valuesComponents/PortalGallery';

const imageData = [
  'https://phonxaydocuments.blob.core.windows.net/phonxayblob/tree.jpg',
  'https://phonxaydocuments.blob.core.windows.net/phonxayblob/bug.JPG',
  'https://phonxaydocuments.blob.core.windows.net/phonxayblob/flow.jpg',
  'https://phonxaydocuments.blob.core.windows.net/phonxayblob/flower.JPG',
  'https://phonxaydocuments.blob.core.windows.net/phonxayblob/gardenofgods.JPG',
  'https://phonxaydocuments.blob.core.windows.net/phonxayblob/lake.JPG',
  'https://phonxaydocuments.blob.core.windows.net/phonxayblob/landscape.JPG',
  'https://phonxaydocuments.blob.core.windows.net/phonxayblob/landscape2.JPG',
  'https://phonxaydocuments.blob.core.windows.net/phonxayblob/moosesmiles.JPG',
  'https://phonxaydocuments.blob.core.windows.net/phonxayblob/open.jpg',
  'https://phonxaydocuments.blob.core.windows.net/phonxayblob/stickme.jpg',
  'https://phonxaydocuments.blob.core.windows.net/phonxayblob/tree.jpg',
  'https://phonxaydocuments.blob.core.windows.net/phonxayblob/wood.jpg',
  'https://phonxaydocuments.blob.core.windows.net/phonxayblob/yellow.jpg',
];

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
