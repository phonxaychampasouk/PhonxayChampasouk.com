import dynamic from 'next/dynamic';
import photos from './photos';

// import SwiperForSubmittedPhotos from './SwiperForSubmittedPhotos';

const SwiperForSubmittedPhotos = dynamic(
  () => import('./SwiperForSubmittedPhotos'),
  { ssr: false },
);

const SubmittedPhotos = ({
  photoCollection, handleOnSubmit, isPhotoDisplayed,
}) => {
  if (!isPhotoDisplayed) {
    return (
      <form onSubmit={handleOnSubmit}>
        <button className="submit-buttom" type="submit">Submit Photos</button>
      </form>
    );
  }
  console.log('photos: ', photos);

  const initialPhoto = () => (
    photos[0].src
  );
  const displaySubmittedPhotos = photoCollection.map((index) => (
    <span><img src={photos[index].src} alt="test" /></span>
  ));
  console.log(displaySubmittedPhotos);

  return (
    <>
      <div>
        <SwiperForSubmittedPhotos
          displaySubmittedPhotos={displaySubmittedPhotos}
          initialPhoto={initialPhoto}
        />
      </div>
    </>
  );
};

export default SubmittedPhotos;
