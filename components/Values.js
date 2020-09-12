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

function ProductValues(props) {
  const { classes } = props;

  return (
    <section className="values-container">
      <div className={classes.root}>
        <Container
          className={classes.container}
          style={{
            marginTop: '120px', marginBottom: '0', paddingTop: '120px', paddingBottom: '240px',
          }}
        >
          <ParticlesBg color="blue" num={15} type="square" bg />
          <Grid container spacing={5}>
            <Grid item xs={12} md={4}>
              <div className={classes.item}>
                <CameraAltIcon style={{ fontSize: 100 }} />
                <Typography variant="h6" className={classes.title}>
                  Explore
                </Typography>
                <Typography variant="h5">
                  I lead with imagination and succeed through determination
                </Typography>
              </div>
            </Grid>
            <Grid item xs={12} md={4}>
              <div className={classes.item}>
                <CloudCircleIcon style={{ fontSize: 100 }} />
                <Typography variant="h6" className={classes.title}>
                  Create
                </Typography>
                <Typography variant="h5">
                  Inorder for me to be unique, I have to give you my all.
                </Typography>
              </div>
            </Grid>
            <Grid item xs={12} md={4}>
              <div className={classes.item}>
                <FaceIcon style={{ fontSize: 100 }} />
                <Typography variant="h6" className={classes.title}>
                  Deliver
                </Typography>
                <Typography variant="h5">
                  Everything that you ever wanted, and then some more.
                </Typography>
              </div>
            </Grid>
          </Grid>
        </Container>
      </div>
    </section>
  );
}

ProductValues.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProductValues);
