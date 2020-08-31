import Head from 'next/head';
import KEYS from '../../keys';

const Bot = () => (
  <>
    <Head>
      <script
        crossOrigin="anonymous"
        src="https://cdn.botframework.com/botframework-webchat/latest/webchat.js"
      />
    </Head>
    <div id="webchat" role="main" />
    <script>
      {
    window.WebChat.renderWebChat(
      {
        directLine: window.WebChat.createDirectLine({
          token: KEYS['my-chat-bot'],
        }),
        userID: 'YOUR_USER_ID',
        username: 'Web Chat User',
        locale: 'en-US',
        botAvatarInitials: 'WC',
        userAvatarInitials: 'WW',
      },
      document.getElementById('webchat'),
    )
}
      ;
    </script>

  </>
);

export default Bot;

// import { DirectLine } from 'botframework-directlinejs';
// import React from 'react';
// import ReactWebChat from 'botframework-webchat';
// import KEYS from '../../keys';

// export default class extends React.Component {
//   constructor(props) {
//     super(props);

//     this.directLine = new DirectLine({ token: KEYS['my-chat-bot'] });
//   }

//   render() {
//     return (
//       <ReactWebChat directLine={this.directLine} userID="https://my-chat-bot.cognitiveservices.azure.com/directline/token" />
//     );
//   }
// }
