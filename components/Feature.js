import './Feature.scss';
import HeroBg from './featureComponents/HeroBg';
import HeroInner from './featureComponents/HeroInner';

const Feature = () => (
  <div className="hero-inner-container">
    <HeroBg />
    <HeroInner />
  </div>

);

export default Feature;
