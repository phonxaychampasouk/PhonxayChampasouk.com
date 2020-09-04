import photos from './photos';

import SwiperForSubmittedPhotos from './SwiperForSubmittedPhotos';

const SubmittedPhotos = ({
  photoCollection, handleOnSubmit, isPhotoDisplayed,
}) => {
  if (!isPhotoDisplayed) {
    return (
      <form onSubmit={handleOnSubmit}>
        <button type="submit">Submit Photos</button>
      </form>
    );
  }
  console.log('photos: ', photos);
  const displaySubmittedPhotos = photoCollection.map((index) => (
    <img src={photos[index].src} alt="test" />
  ));
  console.log(displaySubmittedPhotos);

  return (
    <>
      <div>
        <SwiperForSubmittedPhotos
        displaySubmittedPhotos={displaySubmittedPhotos}
        />
        <button>test</button>
      </div>
    </>
  );
};

export default SubmittedPhotos;
