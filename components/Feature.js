import { Image, Segment } from 'semantic-ui-react';
import ImageGallery from './featureComponents/ImageryGallery';

function Feature() {
  return (
    <>
      <img src="/me.jpg" className="landing-page-image" alt="tetst" />
      <header id="home">
        <div className="row banner">
          <div className="banner-text">
            <h1 className="responsive-headline">
              Im
              Phonxay Champasouk
              .
            </h1>
            <h3>
              Im a
              resident of Seattle Washington
              {' '}
              based
              <span>Software Developer</span>
              .
              I did this and I want do it more
              .
            </h3>
            <hr />
            <ul className="social" />
            <section id="about">
              <div id="background-image">
                <div className="row">
                  <div className="three columns">
                    <img className="profile-pic" src="/moose.jpeg" alt="Tim Baker Profile Pic" />
                  </div>
                  <div className="nine columns main-col">
                    <h2>About Me</h2>
                    <p>Hi, I like to do a lot of things.Hi, I like to do a lot of things.Hi, I like to do a lot of things.Hi, I like to do a lot of things.Hi, I like to do a lot of things.Hi, I like to do a lot of things.Hi, I like to do a lot of things.</p>
                    <h2>About Me</h2>
                    <p>Hi, I like to do a lot of things.Hi, I like to do a lot of things.Hi, I like to do a lot of things.Hi, I like to do a lot of things.Hi, I like to do a lot of things.Hi, I like to do a lot of things.Hi, I like to do a lot of things.</p>
                    <h2>About Me</h2>
                    <p>Hi, I like to do a lot of things.Hi, I like to do a lot of things.Hi, I like to do a lot of things.Hi, I like to do a lot of things.Hi, I like to do a lot of things.Hi, I like to do a lot of things.Hi, I like to do a lot of things.</p>
                    <div className="row">
                      <div className="columns contact-details">
                        <h2>Contact Details</h2>
                        <p className="address">
                          <span>Phonxay</span>
                          <br />
                          <span>
                            3509 South Thistle Street

                            <br />
                            Seattle, WA
                            {' '}
                            FL,
                            ,
                            {' '}
                            98118
                          </span>
                          <br />
                          <span>7274833740</span>
                          <br />
                          <span>phonxay.champasouk@gmail.com</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <Segment>
              <Image src="moose.jpeg" size="small" floated="left" />
              <p>
                Te eum doming eirmod, nominati pertinacia argumentum ad his. Ex eam alia
                facete scriptorem, est autem aliquip detraxit at. Usu ocurreret
                referrentur at, cu epicurei appellantur vix. Cum ea laoreet recteque
                electram, eos choro alterum definiebas in. Vim dolorum definiebas an. Mei
                ex natum rebum iisque.
              </p>
              <Image src="/me.jpg" size="small" floated="right" />
              <p>
                Audiam quaerendum eu sea, pro omittam definiebas ex. Te est latine
                definitiones. Quot wisi nulla ex duo. Vis sint solet expetenda ne, his te
                phaedrum referrentur consectetuer. Id vix fabulas oporteat, ei quo vide
                phaedrum, vim vivendum maiestatis in.
              </p>
              <p>
                Eu quo homero blandit intellegebat. Incorrupte consequuntur mei id. Mei ut
                facer dolores adolescens, no illum aperiri quo, usu odio brute at. Qui te
                porro electram, ea dico facete utroque quo. Populo quodsi te eam, wisi
                everti eos ex, eum elitr altera utamur at. Quodsi convenire mnesarchum eu
                per, quas minimum postulant per id.
              </p>
            </Segment>
            <ImageGallery />
          </div>
        </div>
      </header>
    </>

  );
}

export default Feature;
