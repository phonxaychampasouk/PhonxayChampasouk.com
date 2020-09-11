import { useState } from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Fab from '@material-ui/core/Fab';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import Zoom from '@material-ui/core/Zoom';
import { Chat } from '@material-ui/icons';
import Feature from './Feature';

import ChatBot from './ChatBot';

import KEYS from '../keys';

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'fixed',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
    zIndex: '101',
  },
}));

function ScrollTop(props) {
  const [mooseBotDisplay, setMooseBotDisplay] = useState(false);

  const { children, window } = props;
  const classes = useStyles();
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = ({ target }) => {
    const identifier = target.getAttribute('class');
    if (identifier === 'MuiSvgIcon-root') {
      const anchor = (target.ownerDocument || document).querySelector('#back-to-top-anchor');

      if (anchor) {
        anchor.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    } else {
      setMooseBotDisplay(!mooseBotDisplay);
    }
  };

  return (
    <>
      <Zoom in={trigger}>
        <div onClick={handleClick} role="presentation" className={classes.root} name="to-top-button">
          <Fab color="secondary" size="large" aria-label="scroll back to top">
            <KeyboardArrowUpIcon />
          </Fab>
          <ChatBot handleClick={handleClick} mooseBotDisplay={mooseBotDisplay} />
        </div>
      </Zoom>
    </>
  );
}

ScrollTop.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default function FeatureScroll(props) {
  return (
    <>
      <CssBaseline />
      <Toolbar id="back-to-top-anchor" />
      <Feature />
      <ScrollTop>
        <ChatBot />
      </ScrollTop>
    </>

  );
}
