import GitHubIcon from '@material-ui/icons/GitHub';
import Button from '@material-ui/core/Button';
import { card } from '../../styles/nextjs-material-kit';

import Portal from '../Portal';

const SelectedProject = ({
  data, cardPage, onLeftClick, onRightClick,
}) => (
  <>
    <h1 style={{ fontSize: '2rem' }}>
      Title:
      {' '}
      {data[cardPage].title}
    </h1>

    <Portal
      imageData={data}
      cardPage={cardPage}
      onLeftClick={onLeftClick}
      onRightClick={onRightClick}
    />
    <p style={{
      fontSize: '1rem', maxWidth: '500px', display: 'flex', justifyContent: 'center',
    }}
    >
      {data[cardPage].description}
    </p>
    <Button
      variant="contained"
      color="primary"
      className="github-button"
      endIcon={<GitHubIcon />}
      href={data[cardPage].src}
      target="_blank"
    >
      View Repo
    </Button>
    <ul>
      src:
      {' '}
      {data[cardPage].src}
    </ul>
  </>
);
export default SelectedProject;
