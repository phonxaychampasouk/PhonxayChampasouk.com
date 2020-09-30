import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Paper } from '@material-ui/core';
import ThumbsUpDownIcon from '@material-ui/icons/ThumbsUpDown';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import { flexbox } from '@material-ui/system';
import imageInfo from './imageInfo';

import VoteSlider from './VoteSlider';

const InfoCard = ({ screenWidth, page, openInfo }) => {
  const constraintsRef = useRef(null);
  const rightLimit = screenWidth < 767 ? 0 : 100;
  const photoCardMinWidth = screenWidth < 767 ? 350 : 500;
  const photoCard = [];
  imageInfo.forEach((data) => photoCard.push(
    <>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <span>[Drag me around!]</span>
        <HighlightOffIcon onClick={openInfo} />
      </div>
      <h1 style={{ textAlign: 'center', fontSize: '2rem' }}>
        {' '}
        {data.title}
      </h1>
      <div>
        {' '}
        {data.description}
      </div>
      <div>
        {<LocationOnIcon /> }
        {' '}
        {data.location}
      </div>
    </>,
  ));
  return (
    <div className="info-card-container">
      <motion.div className="drag-area" ref={constraintsRef} />
      <motion.div
        drag
        dragConstraints={{
          left: -170, right: 100, top: -350, bottom: 0,
        }}
      >
        <Paper
          elevation={3}
          style={{
            position: 'relative', paddingBottom: '10px', paddingLeft: '10px', paddingRight: '10px',
          }}
        >
          <div className="image-card">
            {photoCard[page]}
          </div>
        </Paper>

      </motion.div>

    </div>
  );
};

export default InfoCard;
