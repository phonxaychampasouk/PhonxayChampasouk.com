<<<<<<< HEAD
import Button from '@material-ui/core/Button';

import KEYS from '../keys';

=======
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
import Button from '@material-ui/core/Button';
import { Chat } from '@material-ui/icons';
import Feature from './Feature';

import KEYS from '../keys';

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'fixed',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
    zIndex: '101',
  },
}));

function OpenChatBot({
  children, window, handleClick, mooseBotDisplay,
}) {
  const classes = useStyles();

  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  return (
    <>
      <Zoom in={trigger}>
        <div
          className="moosebot-click-container"
          onClick={handleClick}
          name="moosebot"
        >
          {children}
        </div>
      </Zoom>
      {
mooseBotDisplay ? (
  <header id="bot-content">
    <iframe
      title="moosebot"
      src={`https://webchat.botframework.com/embed/chat-bot-resume?s=${KEYS}`}
      style={{ minWidth: '400px', width: '100%', minHeight: '500px' }}
    />
  </header>
)
  : <header id="photo-display">failed test</header>
    }
    </>
  );
}

>>>>>>> moosebot
const ChatBot = ({ handleClick, mooseBotDisplay }) => (
  <>
    {
mooseBotDisplay ? (
  <header id="bot-content">
    <iframe
      title="moosebot"
      src={`https://webchat.botframework.com/embed/chat-bot-resume?s=${KEYS}`}
      style={{ minWidth: '400px', width: '100%', minHeight: '500px' }}
    />
  </header>
)
  : (
    <Button variant="contained" color="primary" onClick={handleClick}>
      Talk to MooseBot
    </Button>
  )
    }
  </>
);
export default ChatBot;
