import React from 'react';
import { Card, Icon, Image } from 'semantic-ui-react';

const Cards = () => (
  <>
    <div className="card-image">
      <Image
        src="/moose.jpeg"
        as="a"
        size="medium"
        href="http://google.com"
        target="_blank"
      />
    </div>
    <div className="card-image">
      <Image
        src="/moose.jpeg"
        as="a"
        size="medium"
        href="http://google.com"
        target="_blank"
      />
    </div>
    <div className="card-image">
      <Image
        src="/moose.jpeg"
        as="a"
        size="medium"
        href="http://google.com"
        target="_blank"
      />
    </div>
    <div className="card-image">
      <Image
        src="/moose.jpeg"
        as="a"
        size="medium"
        href="http://google.com"
        target="_blank"
      />
    </div>
  </>
);

export default Cards;
