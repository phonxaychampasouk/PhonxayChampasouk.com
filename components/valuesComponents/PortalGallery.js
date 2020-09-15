import { motion, AnimatePresence } from 'framer-motion';
import imageData from './imageData';

const variants = {
  enter: (direction) => ({
    x: direction > 0 ? 800 : -800,
    opacity: 0,
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction) => ({
    zIndex: 0,
    x: direction < 0 ? 800 : -800,
    opacity: 0,
  }),
};
const swipeConfidenceThreshold = 10000;
const swipePower = (offset, velocity) => Math.abs(offset) * velocity;

const PortalGallery = ({
  paginate, imageIndex, direction, page,
}) => (
  <>
    <div className="portal-inner-container">
      <AnimatePresence initial={false} custom={direction}>
        <motion.img
          className="portal-imgs"
          key={page}
          src={imageData[imageIndex]}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            opacity: { duration: 0.1 },
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

);
export default PortalGallery;
