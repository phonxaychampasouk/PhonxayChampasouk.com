import { useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import CameraAltIcon from '@material-ui/icons/CameraAlt';
import FaceIcon from '@material-ui/icons/Face';
import CloudCircleIcon from '@material-ui/icons/CloudCircle';
import ParticlesBg from 'particles-bg';
import { motion } from 'framer-motion';
import { Frame, Scroll, useCycle } from 'framer';
import { Parallax, ParallaxProvider } from 'react-scroll-parallax';
import Typography from './valuesComponents/Typography';
import { Directions } from '@material-ui/icons';
import Portal from './Portal.js'

const styles = (theme) => ({
  root: {
    display: 'flex',
    overflow: 'hidden',
    backgroundColor: 'transparent',
  },
  container: {
    display: 'flex',
    position: 'relative',
    height: '100%'
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
      setSizeChart({ xs: 4, iconSize: 50 });
      setIsScreenSet(true);
    } else if (screenWidth < 767) {
      setJustifyContentVal('space-between')
      setFlexGrowVal('0')
      setAlignItemVal('flex-end')
      setFlexDir('row')
      setIsScreenSet(true);
      setSizeChart({ xs: 12, iconSize: 100 });
    }
  }

  const cardMetaData = { fontSize: sizeChart.iconSize , justifyContent: 'center'};
  const cardData = [
    [['0', '0'], (<CameraAltIcon style={cardMetaData} />), 'Explore', screenWidth > 767 ? 'I lead with imagination and succeed through determination' : '', ['0', '0']],
    [['0', '0'], (<CloudCircleIcon style={cardMetaData} />), 'Create', screenWidth > 767 ? 'Inorder for me to be unique, I have to give you my all' : '', ['0', '0']],
    [['0', '0'], (<FaceIcon style={cardMetaData} />), 'Deliver', screenWidth > 767 ? 'Everything that you ever wanted, and then some more' : '', ['0', '0']],
  ];

const parallaxData = {
  x: [],
  y: [],
};

  const { classes } = props;
  const sectionCards = cardData.map((card, ind) => (
    <Parallax className="parallax-child" y={card[0]} x={card[4]} key={ind}  styleInner={{display: 'flex', justifyContent: 'center'}}>
      <Grid  lg={sizeChart.xs} spacing={1} style={{flexDirection: `${flexDir}`}}>
      <motion.div
    animate={{
      scale: [1, 2, 2, 1, 1],
      rotate: [0, 0, 270, 270, 0],
      borderRadius: ["20%", "20%", "50%", "50%", "20%"],
    }}
  >
      <Container  style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
          {card[1]}
          <Typography variant="h5" className={classes.title}>
            {card[2]}
          </Typography>
          <Typography variant="h3" className={classes.title2}>
            {card[3]}
          </Typography>
         </Container>
         </motion.div>
      </Grid>
    </Parallax>
  ));

  return (
    <div className="values-parent">
             <img src="https://phonxaydocuments.blob.core.windows.net/phonxayblob/open.jpg" className="values-bg-image" alt="Landing-page" />

        <div className="values-banner">
        <ParallaxProvider>
          <Container
            className={classes.container}
            style={{
              marginTop: '0px', marginBottom: '0', paddingTop: '40px', paddingBottom: '20px', paddingLeft: '0px', paddingRight: '0px', flexDirection: `${flexDir}`,
            }}
          >
            <div className="parallax" style={{display: 'flex', alignItems: `${alignItemVal}`, justifyContent: `${justifyContentVal}`, flexGrow: '1'}}>
              {sectionCards}
            </div>
            <ParticlesBg color="#454545" num={10} type="square" />
          </Container>
          <Frame  
          height={"70%"} 
          width={"100%"} 
          shadow="0px 10px 10px black" 
          background="null"
          >
            <Portal />
          </Frame>
          </ParallaxProvider>
        </div>
     
    </div>

  );
}

export default withStyles(styles)(ProductValues);
