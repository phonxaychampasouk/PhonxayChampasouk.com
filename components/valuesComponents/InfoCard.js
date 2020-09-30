import { useRef, useState } from 'react';
import { motion } from 'framer-motion';

import { Paper } from '@material-ui/core';
import ThumbsUpDownIcon from '@material-ui/icons/ThumbsUpDown';

import VoteSlider from './VoteSlider';


const projectsData = [
  { title: 'Find and Dine',
    description: 'A full stack open-source web app featuring reviews, photo galleries, and menus',
    src: 'https://github.com/find-and-dine/Find-and-Dine'
  },
  { title: 'Vapor Games',
  description: 'An open-source game reviews application displaying gameplay and customer reviews.',
  src: 'https://github.com/nightmareteam/Gameplay-Finder'
},
{ title: 'Smooth Photo Viewer',
description: '',
src: ''
},
{ title: 'Webchat Editor',
description: '',
src: ''
},
];
const InfoCard = ({ screenWidth, page }) => {
  const constraintsRef = useRef(null);
const rightLimit = screenWidth < 767 ? 0 : 100; 
const projectCardMinWidth = screenWidth < 767 ? 350 : 500; 
const projectCard =[];
projectsData.forEach(data=>projectCard.push(
  <>
          <ul>
Title : {data.title}
          </ul>
          <ul>
description: {data.description}
          </ul>
          <ul>
            Src: {data.src}
          </ul>
          <ul>
Check out my progress!          </ul>
</>
))
  return (
    <div className="info-card-container">
      <motion.div className="drag-area" ref={constraintsRef} />
      <motion.div drag dragConstraints={{ left:-170, right: 100, top:-350, bottom:0}}>
      <Paper elevation={3} style={{ position: 'relative', textAlign: 'left'}}>
     <div className="image-card">{projectCard[page]}</div>
     <div>test</div>
      </Paper>

      </motion.div>

    </div>
  );
};

export default InfoCard;
