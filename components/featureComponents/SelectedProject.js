import { card } from '../../styles/nextjs-material-kit';
import Portal from '../Portal';

const SelectedProject = ({ data, cardIndex }) => (
  <>
    <h1 style={{fontSize:'2rem',}}>
      Title:
      {' '}
      {data[cardIndex].title}
    </h1>

    <Portal imageData={data} cardIndex={cardIndex}/>
    <ul>
      src:
      {' '}
      {data[cardIndex].src}
    </ul>
  </>
);
export default SelectedProject;
