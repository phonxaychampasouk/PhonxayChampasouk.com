// react component for creating beautiful carousel
import Carousel from 'react-slick';
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
// @material-ui/icons
import LocationOn from '@material-ui/icons/LocationOn';
import photos from './photos';
// core components
import GridContainer from './GridContainer';
import GridItem from './GridItem';
import Card from './Card';

import styles from '../../styles/carouselStyle';

const useStyles = makeStyles(styles);

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

  const handleOnDragStart = (e) => e.preventDefault();

  const displaySubmittedPhotos = photoCollection.map((index) => (
    <div>
      <img src={photos[index].src} alt="First slide" className="slick-image" />
      <div className="slick-caption">
        <h4>
          <LocationOn className="slick-icons" />
          Yellowstone National Park, United States
        </h4>
      </div>
    </div>
  ));
  const classes = useStyles();
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
  };
  return (
    <div className="parent-container">
      <GridContainer>
        <GridItem xs={12} sm={12} md={8} className={classes.marginAuto}>
          <Card carousel>
            <Carousel {...settings}>
              {displaySubmittedPhotos}
            </Carousel>
          </Card>
        </GridItem>
      </GridContainer>
    </div>

  );
};

export default SubmittedPhotos;
