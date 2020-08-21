import React from 'react';
import { Image } from 'semantic-ui-react';

const Cards = () => (
  <>
    <div className="card-image">
      <Image
        src="/mia.jpg"
        as="a"
        size="medium"
        href="http://google.com"
        target="_blank"
        rounded
        className="image"
      />
    </div>
    <div className="card-image">
      <Image
        src="/smallimage.jpg"
        as="a"
        size="medium"
        href="http://google.com"
        target="_blank"
        rounded
        className="image"
      />
    </div>
    <div className="card-image">
      <Image
        src="/highseth.jpg"
        as="a"
        size="medium"
        href="http://google.com"
        target="_blank"
        rounded
        className="image"
      />
    </div>
    <div className="card-image">
      <Image
        src="/seth.jpg"
        as="a"
        size="medium"
        href="http://google.com"
        target="_blank"
        rounded
        className="image"
      />
    </div>
    <div className="card-image">
      <Image
        src="/snake.jpg"
        as="a"
        size="medium"
        href="http://google.com"
        target="_blank"
        rounded
        className="image"
      />
    </div>
  </>
);

export default Cards;
