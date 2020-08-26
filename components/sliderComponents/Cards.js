import React from 'react';
import { Image, Reveal } from 'semantic-ui-react';

const Cards = () => (
  <>
    <Reveal animated="fade">
      <Reveal.Content visible>
        <Image src="/me.jpg" size="medium" />
      </Reveal.Content>
      <Reveal.Content hidden>
        <Image src="/moose.jpeg" size="medium" />
      </Reveal.Content>
    </Reveal>
    <Reveal animated="fade">
      <Reveal.Content visible>
        <Image src="/mia.jpg" size="medium" />
      </Reveal.Content>
      <Reveal.Content hidden>
        <Image src="/pat.jpg" size="medium" />
      </Reveal.Content>
    </Reveal>
    <Reveal animated="fade">
      <Reveal.Content visible>
        <Image src="/seth.jpg" size="medium" />
      </Reveal.Content>
      <Reveal.Content hidden>
        <Image src="highSeth.jpg" size="medium" />
      </Reveal.Content>
    </Reveal>
    <Reveal animated="fade">
      <Reveal.Content visible>
        <Image src="/snake.jpg" size="medium" />
      </Reveal.Content>
      <Reveal.Content hidden>
        <Image src="/lake.jpg" size="medium" />
      </Reveal.Content>
    </Reveal>
  </>
);

export default Cards;
