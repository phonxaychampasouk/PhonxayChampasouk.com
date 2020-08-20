import '../styles/Feature.scss';
// import HeroBg from './featureComponents/HeroBg';
// import HeroInner from './featureComponents/HeroInner';

function Feature() {
  const styling = {
    backgroundImage: 'url("/me.jpg")',
    width: '100%',
    height: '100%',
  };
  return (
    <header id="home" style={styling}>
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
        </div>
      </div>

      <p className="scrolldown">
        <a className="smoothscroll" href="#about"><i className="icon-down-circle" /></a>
      </p>

    </header>

  );
}

export default Feature;
