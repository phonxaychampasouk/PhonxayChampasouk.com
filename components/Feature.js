import { Button, Icon, Image } from 'semantic-ui-react';
import Resume from './Resume';
import Skills from './featureComponents/Skills';

function Feature() {
  return (
    <>
      <img src="/background.jpg" className="landing-page-image" alt="tetst" />
      <header id="home">
        <div className="row banner">
          <div className="banner-text">
            <h1 className="responsive-headline">
              >> I&#39;m
              Phonxay.
            </h1>
            <h3 id="banner-h3">
              I'm a <span>Software Developer</span>
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
                  <Image src="avatar.jpg" size="small" circular bordered />
                </div>
                <div className="nine columns main-col">
                  <h2>About Me</h2>
                  <p>
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
                      <div id="social-buttons">
                        <Button animated="vertical" color="linkedin">
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
                        <Button animated="vertical" color="linkedin">
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
                        <Button animated="vertical" color="instagram">
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
