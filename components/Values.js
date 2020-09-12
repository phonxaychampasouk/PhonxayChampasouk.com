import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import CameraAltIcon from '@material-ui/icons/CameraAlt';
import FaceIcon from '@material-ui/icons/Face';
import CloudCircleIcon from '@material-ui/icons/CloudCircle';
import ParticlesBg from 'particles-bg';
import Typography from './valuesComponents/Typography';

const styles = (theme) => ({
  root: {
    display: 'flex',
    overflow: 'hidden',
    backgroundColor: 'transparent',
  },
  container: {
    marginTop: theme.spacing(15),
    marginBottom: theme.spacing(30),
    display: 'flex',
    position: 'relative',
  },
  item: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(0, 5),
  },
  image: {
    height: 55,
  },
  title: {
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(5),
  },
  curvyLines: {
    pointerEvents: 'none',
    position: 'absolute',
    top: -180,
  },
});

const cardData = [
  [(<CameraAltIcon style={{ fontSize: 100 }} />), 'Explore', 'I lead with imagination and succeed through determination'],
  [(<CloudCircleIcon style={{ fontSize: 100 }} />), 'Create', 'Inorder for me to be unique, I have to give you my all'],
  [(<FaceIcon style={{ fontSize: 100 }} />), 'Deliver', 'Everything that you ever wanted, and then some more'],
];

function ProductValues(props) {
  const { classes } = props;
  const sectionCards = cardData.map((card) => (
    <Grid item xs={12} md={4}>
      <div className={classes.item}>
        {card[0]}
        <Typography variant="h6" className={classes.title}>
          {card[1]}
        </Typography>
        <Typography variant="h5">
          {card[2]}
        </Typography>
      </div>
    </Grid>
  ));

  return (
    <div className="values-container">
      <img src="open.jpg" className="values-bg-image" alt="Landing-page" />
      <div className="values-banner">
        <Container
          className={classes.container}
          style={{
            marginTop: '10px', marginBottom: '0', paddingTop: '100px', paddingBottom: '24px',
          }}
        >
          <Grid container spacing={4}>
            {sectionCards}
          </Grid>
          <ParticlesBg color="white" num={5} type="square" bg />
        </Container>

      </div>
    </div>
  );
}

export default withStyles(styles)(ProductValues);
