import Button from '@material-ui/core/Button';

//import KEYS from '../keys';

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
