import {
  Image, Container, Button, Icon,
} from 'semantic-ui-react';

const PhotoPortfolio = () => (
  <>
    <img src="/background3.png" className="portfolio-background" alt="Good Looking Moose" />
    <header id="photo-display">
      <div className="row banner">
        <Button icon>
          <Icon name="arrow circle right" />
        </Button>
      </div>
    </header>

  </>
);

export default PhotoPortfolio;
