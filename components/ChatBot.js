import React, { Component } from 'react';
//import { DirectLine } from 'botframework-directlinejs';

//import ReactWebChat from 'botframework-webchat';
import {
  Grid, Segment, Label, Container, Button, Icon,
} from 'semantic-ui-react';
import KEYS from '../keys';

//import ChatBot from './botComponents/ChatBot';

// eslint-disable-next-line react/prefer-stateless-function
class PhotoPortfolio extends Component {
  constructor() {
    super();
    this.state = {
      displayMooseBot: false,
    };
    this.toggleMooseBot = this.toggleMooseBot.bind(this);
    //this.directLine = new DirectLine({ token: KEYS['my-chat-bot'] });
  }

  toggleMooseBot= () => {
    const { displayMooseBot } = this.state;

    this.setState({
      displayMooseBot: !displayMooseBot,
    });
  }

  render() {
    const { displayMooseBot } = this.state;

    return (
      <>
        <div className="bot-content">
          <Segment>
            <Grid>
              <Grid.Column textAlign="center">
                <Button onClick={() => this.toggleMooseBot()}>
                  Talk to Moosebot
                </Button>
              </Grid.Column>
            </Grid>
            {
              displayMooseBot
                ? (
                  <header id="bot-content">
                    test
                  </header>
                )
                : <header id="photo-display">failed test</header>
                }
          </Segment>
          <div className="portfolio-banner" />
        </div>
        <img
          src="/background3.png"
          className="portfolio-background"
          alt="moose head"
          onClick={() => this.toggleMooseBot()}
        />
      </>

    );
  }
}

export default PhotoPortfolio;
