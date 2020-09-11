import { Button, Icon, Image } from 'semantic-ui-react';
import Resume from './Resume';

function Feature() {
  return (
    <>
      <img src="/stickme.jpg" className="landing-page-image" alt="B/W Mountain" />
      <header id="landing-page">
        <div className="row banner">
          <div className="banner-text">
            <h1 className="responsive-headline">
              >> I&#39;m
              Phonxay.
            </h1>
            <h3 id="banner-h3">
              I'm a
              {' '}
              <span>Software Developer</span>
              based in Seattle, Washington .
              Let me help you build a beautiful
              and fast website that will keep your customers engaged.
            </h3>
            <hr />
          </div>
          <ul className="social" />
          <section id="about">
            <div id="background-image">
              <div className="about-me-row">
                <div className="avatar">
                  <Image src="heromain.jpg" size="small" circular bordered />
                </div>
                <div className="nine columns main-col">
                  <h2>About Me</h2>
                  <p className="about-me-p">
                    {' '}
                    Hi! My name is Phonxay! I like to tell people that Phonxay is pronounced like Banzai, but with a "P". Greetings,
                    I am so happy that you have viewed my site. You can be here for many reasons, such as for photography,
                    web development, or a social media connection. Any ways, I hope you enjoy the functionalities of my web application. It is still in Development.
                    I will continue to deploy my application as I complete features.
                  </p>
                  <div className="row">
                    <div className="columns contact-details">
                      <h2>Contact Details</h2>
                      <p className="address">
                        <span className="about-me-p">Phonxay Champasouk</span>
                        <br />
                        <span className="about-me-p">
                          Seattle, WA
                          {' '}
                        </span>
                        <br />
                        <br />
                        <span className="about-me-p">phonxay.champasouk@gmail.com</span>
                      </p>
                      <div id="social-buttons">
                        <Button
                          animated="vertical"
                          onClick={(e) => {
                            e.preventDefault();
                            window.location.href = 'https://www.github.com/phonxaychampasouk';
                          }}
                          color="github"
                        >
                          <Button.Content visible>
                            {' '}
                            <Icon name="github" />
                            {' '}
                            Github
                          </Button.Content>
                          <Button.Content hidden>
                            <Icon name="github" />
                            {' '}
                            Connect
                          </Button.Content>
                        </Button>
                        <Button
                          animated="vertical"
                          onClick={(e) => {
                            e.preventDefault();
                            window.location.href = 'https://www.linkedin.com/in/phonxaychampasouk1';
                          }}
                          color="linkedin"
                        >
                          <Button.Content visible>
                            {' '}
                            <Icon name="linkedin" />
                            {' '}
                            LinkedIn
                          </Button.Content>
                          <Button.Content hidden>
                            <Icon name="linkedin" />
                            {' '}
                            Connect
                          </Button.Content>
                        </Button>
                        <Button
                          animated="vertical"
                          onClick={(e) => {
                            e.preventDefault();
                            window.location.href = 'https://www.instagram.com/the.champa.gram/';
                          }}
                          color="instagram"
                        >
                          <Button.Content visible>
                            {' '}
                            <Icon name="instagram" />
                            {' '}
                            Instagram
                          </Button.Content>
                          <Button.Content hidden>
                            <Icon name="instagram" />
                            {' '}
                            Connect
                          </Button.Content>
                        </Button>
                      </div>
                    </div>
                    <div className="download-button">
                      <Button animated>
                        <Button.Content visible>Resume</Button.Content>
                        <Button.Content hidden>
                          Download
                        </Button.Content>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <Resume />
        </div>
      </header>
    </>

  );
}

export default Feature;
