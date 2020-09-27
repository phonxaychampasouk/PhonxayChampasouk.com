import { card } from '../../styles/nextjs-material-kit';
import Portal from '../Portal';

const SelectedProject = ({
  data, cardName, onLeftClick, onRightClick,
}) =>{ 
    console.log(data);
    return(
  <>
    <h1 style={{ fontSize: '2rem' }}>
      Title:
      {' '}
      {data[cardName].title}
    </h1>

    <Portal
      imageData={data}
      cardName={cardName}
      onLeftClick={onLeftClick}
      onRightClick={onRightClick}
    />
    <ul>
      src:
      {' '}
      {data[cardName].src}
    </ul>
  </>
);
}
export default SelectedProject;
