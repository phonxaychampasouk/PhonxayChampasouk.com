import dynamic from 'next/dynamic';
import photos from './photos';

// renders component in browser
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

  const initialPhoto = () => (
    photos[0].src
  );
  const handleOnDragStart = (e) => e.preventDefault();

  const displaySubmittedPhotos = photoCollection.map((index) => (
    <img src={photos[index].src} onDragStart={handleOnDragStart} alt="test" className="submitted-photos" />
  ));

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
