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
import Typography from './valuesComponents/Typography';

const styles = (theme) => ({
  root: {
    display: 'flex',
    overflow: 'hidden',
    backgroundColor: 'transparent',
  },
  container: {
    display: 'flex',
    position: 'relative',
  },
  item: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginLeft: theme.spacing(0, 5),
    marginRight: theme.spacing(0, 5),
    paddingTop: 25,
  },
  image: {
    height: 40,
  },
  title: {
    fontSize: 30,
  },
  title2: {
    fontSize: 22,

  },
});

function ProductValues(props) {
  const [sizeChart, setSizeChart] = useState({ xs: 4, iconSize: 50 });
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [isScreenSet, setIsScreenSet] = useState(false);

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
      setSizeChart({ xs: 4, iconSize: 50 });
      setIsScreenSet(true);
    } else if (screenWidth < 767) {
      setIsScreenSet(true);
      setSizeChart({ xs: 12, iconSize: 100 });
    }
  }

  const cardData = [
    [(<CameraAltIcon style={{ fontSize: sizeChart.iconSize }} />), 'Explore', 'I lead with imagination and succeed through determination'],
    [(<CloudCircleIcon style={{ fontSize: sizeChart.iconSize }} />), 'Create', 'Inorder for me to be unique, I have to give you my all'],
    [(<FaceIcon style={{ fontSize: sizeChart.iconSize }} />), 'Deliver', 'Everything that you ever wanted, and then some more'],
  ];

  const { classes } = props;
  const sectionCards = cardData.map((card) => (
    <Grid item xs={sizeChart.xs}>
      <div className={classes.item}>
        {card[0]}
        <Typography variant="h6" className={classes.title}>
          {card[1]}
        </Typography>
        <Typography variant="h5" className={classes.title2}>
          {card[2]}
        </Typography>
      </div>
    </Grid>
  ));

  return (
    <div className="values-parent">
      <img src="open.jpg" className="values-bg-image" alt="Landing-page" />
      <div className="values-banner">
        <Container
          className={classes.container}
          style={{
            marginTop: '0px', marginBottom: '0', paddingTop: '25px', paddingBottom: '50px', flexDirection: 'column-reverse',
          }}
        >
          <Grid container spacing={4}>
            {sectionCards}
          </Grid>
          <ParticlesBg color="#454545" num={10} type="square" />
        </Container>
      </div>
    </div>

  );
}

export default withStyles(styles)(ProductValues);
