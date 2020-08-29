import React, { Component } from 'react';

import {
  Grid, Segment, Label, Container, Button, Icon,
} from 'semantic-ui-react';

// eslint-disable-next-line react/prefer-stateless-function
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
                <Button>Talk to Moosebot</Button>
              </Grid.Column>
            </Grid>
          </Segment>
          <div className="portfolio-banner" />
        </div>
        <img src="/background3.png"
        className="portfolio-background"
        alt="moose head"
        onClick={()=>this.toggleMooseBot()}
        />
        { displayMooseBot ?   <header id="photo-display">teste</header> : <header id="photo-display">failed test</header> }
      
      </>

    );
  }
}

export default PhotoPortfolio;
