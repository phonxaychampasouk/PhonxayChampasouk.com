import PortalGallery from './valuesComponents/PortalGallery';

const Portal = () => {
  console.log('holder');
  return (
    <section className="portal-outer-container">
      <div className="portal-grid-display">

        <PortalGallery />
      </div>
      <div className="portal-navigation" />
    </section>
  );
};

export default Portal;
