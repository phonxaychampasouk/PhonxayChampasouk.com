import './Cards.scss';

// Cards need src, card caption, card href
// Need to take in data through props
// use state machine Xstate
// each card will have events listeners
const Cards = () => {
  const cardData = [
    { src: '/card/card1.jpeg', caption: 'Following is the top-list of the best quotes on fake people and fake friends. Weve divided it into 2 parts: first part is all about fake friends and the second part includes popular fake people quotes' },
    { src: '/card/card2.jpeg', caption: 'Following is the top-list of the best quotes on fake people and fake friends. Weve divided it into 2 parts: first part is all about fake friends and the second part includes popular fake people quotes' },
    { src: '/card/card3.jpeg', caption: 'Following is the top-list of the best quotes on fake people and fake friends. Weve divided it into 2 parts: first part is all about fake friends and the second part includes popular fake people quotes' },
    { src: '/card/card4.jpeg', caption: 'Following is the top-list of the best quotes on fake people and fake friends. Weve divided it into 2 parts: first part is all about fake friends and the second part includes popular fake people quotes' },
    { src: '/card/card5.jpeg', caption: 'Following is the top-list of the best quotes on fake people and fake friends. Weve divided it into 2 parts: first part is all about fake friends and the second part includes popular fake people quotes' },

  ];
  const cards = cardData.map((card, index) => (
    <>
      <img className="card" key={`imgkey-${index}`} src={card.src} alt="card" />
      <div className="card-caption" key={`captionkey-${index}`}>Caption</div>
    </>
  ));

  return (
    <div className="cards">
    { cards }
    </div>
  );
};

export default Cards;
