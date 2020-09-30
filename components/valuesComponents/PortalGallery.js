import zIndex from '@material-ui/core/styles/zIndex';
import { motion, AnimatePresence } from 'framer-motion';

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
  paginate, imageIndex, direction, page, imageData, onLeftClick, onRightClick, photoGallery,
}) => (
  <>
    <div className="portal-inner-container">
      <AnimatePresence initial={false} custom={direction}>
        {
            !photoGallery
              ? (
                <motion.img
                  className="portal-imgs"
                  zIndex={0}
                  key={page}
                  src={imageData[imageIndex].image}
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
                      onLeftClick(imageIndex);
                    } else if (swipe > swipeConfidenceThreshold) {
                      paginate(-1);
                      onRightClick(imageIndex);
                    }
                  }}
                />
              )
              : (
                <motion.img
                  className="portal-imgs"
                  zIndex={0}
                  key={page}
                  src={imageData[imageIndex]}
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
              )

}
      </AnimatePresence>
    </div>
  </>
);
export default PortalGallery;
