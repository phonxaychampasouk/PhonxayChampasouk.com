import zIndex from '@material-ui/core/styles/zIndex';
import { motion, AnimatePresence } from 'framer-motion';

// const imageData = [
//   'https://phonxaydocuments.blob.core.windows.net/phonxayblob/tree.jpg',
//   'https://phonxaydocuments.blob.core.windows.net/phonxayblob/bug.JPG',
//   'https://phonxaydocuments.blob.core.windows.net/phonxayblob/flow.jpg',
//   'https://phonxaydocuments.blob.core.windows.net/phonxayblob/flower.JPG',
//   'https://phonxaydocuments.blob.core.windows.net/phonxayblob/gardenofgods.JPG',
//   'https://phonxaydocuments.blob.core.windows.net/phonxayblob/lake.JPG',
//   'https://phonxaydocuments.blob.core.windows.net/phonxayblob/landscape.JPG',
//   'https://phonxaydocuments.blob.core.windows.net/phonxayblob/landscape2.JPG',
//   'https://phonxaydocuments.blob.core.windows.net/phonxayblob/moosesmiles.JPG',
//   'https://phonxaydocuments.blob.core.windows.net/phonxayblob/open.jpg',
//   'https://phonxaydocuments.blob.core.windows.net/phonxayblob/stickme.jpg',
//   'https://phonxaydocuments.blob.core.windows.net/phonxayblob/tree.jpg',
//   'https://phonxaydocuments.blob.core.windows.net/phonxayblob/wood.jpg',
//   'https://phonxaydocuments.blob.core.windows.net/phonxayblob/yellow.jpg',
// ];
const projectsData = [
  {
    title: 'Find and Dine',
    description: 'A full stack open-source web app featuring reviews, photo galleries, and menus',
    src: 'https://github.com/find-and-dine/Find-and-Dine',
  },
  {
    title: 'Vapor Games',
    description: 'An open-source game reviews application displaying gameplay and customer reviews.',
    src: 'https://github.com/nightmareteam/Gameplay-Finder',
  },
  {
    title: 'Webchat Editor',
    description: '',
    src: '',
  },
  {
    title: 'Webchat Editor',
    description: '',
    src: '',
  },
];
const variants = {
  enter: (direction) => ({
    x: direction > 0 ? 1000 : -1000,
    opacity: 0,
  }),
  center: {
    zIndex: 0,
    x: 0,
    opacity: 1,
  },
  exit: (direction) => ({
    zIndex: 0,
    x: direction < 0 ? 1000 : -1000,
    opacity: 0,
  }),
};
const swipeConfidenceThreshold = 10000;
const swipePower = (offset, velocity) => Math.abs(offset) * velocity;

const PortalGallery = ({
  paginate, imageIndex, direction, page, imageData,
}) => {
  console.log('imageData:',imageData[imageIndex].images);
  return (
  <>
    <div className="portal-inner-container">
      <AnimatePresence initial={false} custom={direction}>
        <motion.img
          className="portal-imgs"
          zIndex={0}
          key={page}
          src={imageData[imageIndex].images}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            opacity: { duration: 0.3 },
          }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={1}
          onDragEnd={(e, { offset, velocity }) => {
            const swipe = swipePower(offset.x, velocity.x);

            if (swipe < -swipeConfidenceThreshold) {
              paginate(1);
            } else if (swipe > swipeConfidenceThreshold) {
              paginate(-1);
            }
          }}
        />
      </AnimatePresence>
    </div>
  </>

)}
export default PortalGallery;
