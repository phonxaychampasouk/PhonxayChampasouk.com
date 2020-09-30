import KEYS from '../keys';

const ChatBot = () => (
  <header id="bot-content">
    <iframe
      title="moosebot"
      src={`https://webchat.botframework.com/embed/chat-bot-resume?s=tst`}
      style={{ minWidth: '400px', width: '100%', minHeight: '500px' }}
    />
  </header>
);
export default ChatBot;
