import { useState, useCallback } from 'react';

import Gallery from 'react-photo-gallery';

import photos from './galleryComponents/photos';
import SelectedImage from './galleryComponents/SelectedImage';

/* popout the browser and maximize to see more rows! -> */

function BasicRows() {
  const [selectAll, setSelectAll] = useState(false);

  const toggleSelectAll = () => {
    setSelectAll(!selectAll);
  };
  const imageRenderer = useCallback(
    ({
      index, left, top, key, photo,
    }) => (
      <SelectedImage
        selected={!!selectAll}
        key={key}
        margin="2px"
        index={index}
        photo={photo}
        left={left}
        top={top}
      />
    ),
    [selectAll],
  );
  return (
    <Gallery
      photos={photos}
      renderImage={imageRenderer}
    />
  );
}
export default BasicRows;
