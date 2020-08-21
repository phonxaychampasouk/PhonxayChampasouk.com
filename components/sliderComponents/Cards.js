import React from 'react';
import { Image } from 'semantic-ui-react';
import '../../styles/Cards.scss';

const Cards = () => (
  <>
    <div className="card-image">
      <Image
        src="/moose.jpeg"
        as="a"
        size="small"
        href="http://google.com"
        target="_blank"
        circular
        className="image"
      />
    </div>
    <div className="card-image">
      <Image
        src="/moose.jpeg"
        as="a"
        size="small"
        href="http://google.com"
        target="_blank"
        circular
        className="image"
      />
    </div>
    <div className="card-image">
      <Image
        src="/moose.jpeg"
        as="a"
        size="small"
        href="http://google.com"
        target="_blank"
        circular
        className="image"
      />
    </div>
    <div className="card-image">
      <Image
        src="/moose.jpeg"
        as="a"
        size="small"
        href="http://google.com"
        target="_blank"
        circular
        className="image"
      />
    </div>
  </>
);

export default Cards;
