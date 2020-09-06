import Coverflow from 'react-coverflow';

const SwiperForSubmittedPhotos = ({ displaySubmittedPhotos, initialPhoto }) => (
  <Coverflow
    width="100%"
    height={480}
    displayQuantityOfSide={2}
    navigation={false}
    enableHeading={false}
  >
    <div
      role="menuitem"
      tabIndex="0"
    >
      <img
        src="[image/path/please_change]"
        alt="title or description"
        style={{ display: 'block', width: '100%' }}
      />
    </div>
    {displaySubmittedPhotos}
  </Coverflow>
);

export default SwiperForSubmittedPhotos;
