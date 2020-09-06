import { useState, useCallback } from 'react';
import Slider from './Slider';
import Gallery from 'react-photo-gallery';
import photos from './galleryComponents/photos';
import SelectedImage from './galleryComponents/SelectedImage';
import SubmittedPhotos from './galleryComponents/SubmittedPhotos';

/* popout the browser and maximize to see more rows! -> */

function BasicRows() {
  const [selectAll, setSelectAll] = useState(false);
  const [photoCollection, setPhotoCollection] = useState([null]);
  const [isPhotoDisplayed, setIsPhotoDisplayed] = useState(false);

  const toggleSelectAll = () => {
    setSelectAll(!selectAll);
  };
  const handleOnSubmit = (e) => {
    setPhotoCollection(photoCollection.map((photo) => parseInt(photo, 10)));
    setIsPhotoDisplayed(true);
    console.log('photoCollections should be all ints', photoCollection);
    e.preventDefault();
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
        setPhotoCollection={setPhotoCollection}
      />
    ),
    [selectAll],
  );
  return (
    <>
      <SubmittedPhotos
        photoCollection={photoCollection}
        handleOnSubmit={handleOnSubmit}
        isPhotoDisplayed={isPhotoDisplayed}

      />
      <Gallery
        photos={photos}
        renderImage={imageRenderer}
      />
      
    </>
  );
}
export default BasicRows;
