import '../styles/Feature.scss';

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
          </div>
        </div>
      </header>
    </>

  );
}

export default Feature;
