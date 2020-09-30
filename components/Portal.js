import { useState } from 'react';
import { wrap } from '@popmotion/popcorn';
import { useRef } from "react";
import { motion, useCycle } from "framer-motion";

import PortalGallery from './valuesComponents/PortalGallery';
// import { useDimensions } from "./valuesComponents/useDimensions";


import InfoCard from './valuesComponents/InfoCard';



const sidebar = {
  open: (height = 200) => ({
    clipPath: `circle(${height * 2 + 200}px at 100% 0%)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2
    }
  }),
  closed: {
    clipPath: "circle(0px at 35% 50%)",
    transition: {
      delay: 0.1,
      type: "spring",
      stiffness: 200,
      damping: 60
    }
  }
};

const Portal = ({screenWidth,imageData, cardIndex, onLeftClick, onRightClick, photoGallery}) => {
  const [[page, direction], setPage] = useState([0, 0]);
  const [infoDisplay, setInfoDisplay] = useState('false');
  const [isOpen, toggleOpen] = useCycle(false, true);
  // const containerRef = useRef(null);
  // const { height } = useDimensions(containerRef);
console.log(imageData)
  const paginate = (newDirection) => {
    setPage([page + newDirection, newDirection]);
  };
  const imageIndex = wrap(0, imageData.length, page);

  const openInfo = () => {
    setInfoDisplay(!infoDisplay);
  };
  console.log('page:', imageData)

  return (
      <section className="portal-outer-container">
        {photoGallery ? 
                  <>
                  <PortalGallery
                  className="portal-grid-display"
                  paginate={paginate}
                  imageIndex={imageIndex}
                  direction={direction}
                  page={page}
                  imageData={imageData}
                  photoGallery
                /> 
                <div className="info-child" role="button" tabIndex={-1} onClick={() => openInfo()}>
                 i
               </div>
               {
                 infoDisplay ? 
               <InfoCard page={page}/>
               :
               <> </>
                }
                <div className="portal-navigation-container">
                <div className="prev" role="button" tabIndex={-1} onKeyDown={() => paginate(-1)} onClick={() => {paginate(-1);}}>
                 ‣
               </div>
               <div className="next" role="button" tabIndex={0} onKeyUp={() => paginate(1)} onClick={() => {paginate(1); }}>
                 ‣
               </div>
               </div>
               </>
        :
          <>
          <PortalGallery
            className="portal-grid-display"
            paginate={paginate}
            imageIndex={imageIndex}
            direction={direction}
            page={page}
            imageData={imageData}
            onLeftClick={onLeftClick}
            onRightClick={onRightClick}
          />
          <div className="portal-navigation-container">
             <div className="prev" role="button" tabIndex={-1} onKeyDown={() => paginate(-1)} onClick={() => {paginate(-1); onLeftClick(imageIndex)}}>
            ‣
          </div>
          <div className="next" role="button" tabIndex={0} onKeyUp={() => paginate(1)} onClick={() => {paginate(1); onRightClick(imageIndex)}}>
            ‣
          </div>
          </div>
</>
}
</section>
)
}

export default Portal;

/* <motion.div
               className="info-button-container"
               initial={false}
               animate={isOpen ? 'open' : 'closed'}
               custom={{height}}
               ref={containerRef}>
                 <motion.div className="background" variants={sidebar} >
                <InfoCard page={page} screenWidth={screenWidth}/>
                   </motion.div>
                 <button 
                   className="info-child" 
                   role="button" 
                   tabIndex={-1} 
                   onKeyPress={() => toggleOpen()} 
                   onClick={() => toggleOpen()}>
                  {`i`}
                 </button>
             </motion.div> */