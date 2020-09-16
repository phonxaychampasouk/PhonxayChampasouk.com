import { useRef, useState } from 'react';
import { motion } from 'framer-motion';

import { Paper } from '@material-ui/core';
import ThumbsUpDownIcon from '@material-ui/icons/ThumbsUpDown';

import VoteSlider from './VoteSlider';

const InfoCard = ({ screenWidth }) => {
  const constraintsRef = useRef(null);
const rightLimit = screenWidth < 767 ? 0 : 100; 
  return (
    <div className="example-container">

      <motion.div className="drag-area" ref={constraintsRef} />
      <motion.div drag dragConstraints={{ left:-170, right:`${rightLimit}`, top:-350, bottom:0}}>
        <Paper square={true} elevation={3} style={{ maxWidth: '350px', position: 'relative' }}>
          <ul>
            Title : 7 Mile Tree
          </ul>
          <ul>
            Location: Yellowstone National Park, WY
          </ul>
          <ul>
            Captured: July 2020
          </ul>
          <ul>
            Data: All those photos were shot using a Sony A3200! Get out there and find your shot!
          </ul>
          <VoteSlider />
        </Paper>
      </motion.div>

    </div>
  );
};

export default InfoCard;
