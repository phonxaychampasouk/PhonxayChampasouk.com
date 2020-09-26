import { useState, useEffect, useCallback , useRef} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import CameraAltIcon from '@material-ui/icons/CameraAlt';
import FaceIcon from '@material-ui/icons/Face';
import CloudCircleIcon from '@material-ui/icons/CloudCircle';
import { Frame, Scroll, useCycle } from 'framer';
import { Parallax, ParallaxProvider } from 'react-scroll-parallax';
import Typography from './valuesComponents/Typography';
import { Directions } from '@material-ui/icons';
import Portal from './Portal.js'

import {
  useViewportScroll,
  motion,
  useTransform,
  useMotionValue
} from 'framer-motion';
import { useInView } from 'react-intersection-observer';


const styles = (theme) => ({
  root: {
    display: 'flex',
    overflow: 'hidden',
    backgroundColor: 'transparent',
  },
  container: {
    display: 'flex',
    position: 'relative',
    height: '100%',
    paddingLeft: '0px !important',
    paddingRight: '0px !important',
  },
  item: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'end',
    paddingTop: 25,
  },
  image: {
    height: 40,
  },
  title: {
    fontSize: 30,
  },
  title2: {
    fontSize: 16,
  },

});

function ProductValues(props) {
  const [sizeChart, setSizeChart] = useState({ xs: 4, iconSize: 50 });
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [isScreenSet, setIsScreenSet] = useState(false);
  const [flexDir, setFlexDir] = useState('column');
  const [alignItemVal, setAlignItemVal ] = useState('flex-end')
  const [flexGrowVal, setFlexGrowVal ] = useState('0')
  const [justifyContentVal, setJustifyContentVal ] = useState('flex-end')


  function updateDimensions() {
    setScreenWidth(window.innerWidth);
    setIsScreenSet(!isScreenSet);
  }

  useEffect(() => {
    window.addEventListener('resize', updateDimensions);
    return function cleanup() {
      window.removeEventListener('resize', updateDimensions);
    };
  });

  if (isScreenSet === false) {
    if (screenWidth > 767) {
      setJustifyContentVal('flex-end')
      setFlexGrowVal('1')
      setAlignItemVal('flex-end')
      setFlexDir('row')
      setSizeChart({ xs: 4, iconSize: 100 });
      setIsScreenSet(true);
    } else if (screenWidth < 767) {
      setJustifyContentVal('space-between')
      setFlexGrowVal('0')
      setAlignItemVal('flex-end')
      setFlexDir('row')
      setIsScreenSet(true);
      setSizeChart({ xs: 12, iconSize: 75 });
    }
  }

  const cardMetaData = { fontSize: sizeChart.iconSize , justifyContent: 'center'};
  const cardData = [
    [['-50%', '50%'], (<CameraAltIcon style={cardMetaData} />), 'Explore', screenWidth > 767 ? 'I lead with imagination and succeed through determination' : '', ['-50%', '50%']],
    [['50%', '-50%'], (<CloudCircleIcon style={cardMetaData} />), 'Create', screenWidth > 767 ? 'Inorder for me to be unique, I have to give you my all' : '', ['50%', '-50%']],
    [['-50%', '50%'], (<FaceIcon style={cardMetaData} />), 'Deliver', screenWidth > 767 ? 'Everything that you ever wanted, and then some more' : '', ['-50%', '50%']],
  ];

const parallaxData = {
  x: [],
  y: [],
};



const [ref, inView, entry] = useInView({
  /* Optional options */
  threshold: 0.5,
  triggerOnce: false
});
const variants = {
  visible: { opacity: 1, scale: 1, y: 0 },
  hidden: {
    opacity: 0,
    scale: 0.65,
    y: 50
  }
};

  const { classes } = props;
  const sectionCards = cardData.map((card, ind) => (
   
      <Grid  lg={sizeChart.xs} spacing={1} style={{flexDirection: `${flexDir}`,display: 'flex', justifyContent: 'center'}}>
      <Container  style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
          
      <motion.div
        animate={inView ? 'visible' : 'hidden'}
        variants={variants}
        transition={{ duration: 2, ease: 'easeOut' }}
        ref={ref}
        className="magic"
      >{card[1]}   </motion.div>
          <Typography variant="h5" className={classes.title}>
            {card[2]}
          </Typography>
          <Typography variant="h3" className={classes.title2}>
            {card[3]}
          </Typography>
         </Container>
      </Grid>
    
  ));

  return (
    <div className="values-parent">
        <div className="values-banner">
        <ParallaxProvider>
          <Container
            className={classes.container}
            style={{
              flexDirection: `${flexDir}`,
            }}
          >
            <div className="parallax" style={{display: 'flex', alignItems: `${alignItemVal}`, justifyContent: `${justifyContentVal}`, flexGrow: '1'}}>
              {sectionCards}
            </div>
          </Container>
          <Frame  
          height={"70%"} 
          width={"100%"} 
          shadow="0px 10px 10px black" 
          background="null"
          >
            <Portal screenWidth={screenWidth}/>
          </Frame>
          </ParallaxProvider>
        </div>
     
    </div>

  );
}

export default withStyles(styles)(ProductValues);
