import React, { Component } from 'react';
import {
  Grid, Segment, Button,
} from 'semantic-ui-react';
import KEYS from '../keys';

class PhotoPortfolio extends Component {
  constructor() {
    super();
    this.state = {
      displayMooseBot: false,
    };
    this.toggleMooseBot = this.toggleMooseBot.bind(this);
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
                    <iframe
                      src={`https://webchat.botframework.com/embed/chat-bot-resume?s=${KEYS.mychatbot}`}
                      style={{ minWidth: '400px', width: '100%', minHeight: '500px' }}
                    />
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
