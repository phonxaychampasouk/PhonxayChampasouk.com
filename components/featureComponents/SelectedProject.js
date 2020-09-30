import GitHubIcon from '@material-ui/icons/GitHub';
import Button from '@material-ui/core/Button';
// import imageData from '../valuesComponents/imageData';

import Portal from '../Portal';

const imageData = [
  'https://phonxaydocuments.blob.core.windows.net/phonxayblob/tree.jpg',
  'https://phonxaydocuments.blob.core.windows.net/phonxayblob/bug.JPG',
  'https://phonxaydocuments.blob.core.windows.net/phonxayblob/flow.jpg',
  'https://phonxaydocuments.blob.core.windows.net/phonxayblob/flower.JPG',
  'https://phonxaydocuments.blob.core.windows.net/phonxayblob/gardenofgods.JPG',
  'https://phonxaydocuments.blob.core.windows.net/phonxayblob/lake.JPG',
  'https://phonxaydocuments.blob.core.windows.net/phonxayblob/landscape.JPG',
  'https://phonxaydocuments.blob.core.windows.net/phonxayblob/landscape2.JPG',
  'https://phonxaydocuments.blob.core.windows.net/phonxayblob/moosesmiles.JPG',
  'https://phonxaydocuments.blob.core.windows.net/phonxayblob/open.jpg',
  'https://phonxaydocuments.blob.core.windows.net/phonxayblob/stickme.jpg',
  'https://phonxaydocuments.blob.core.windows.net/phonxayblob/wood.jpg',
  'https://phonxaydocuments.blob.core.windows.net/phonxayblob/yellow.jpg',
];
const SelectedProject = ({
  data, cardPage, onLeftClick, onRightClick,
}) => {
  let photoGallery = '';
  if (data[cardPage].title === 'Photo Gallery') {
    photoGallery = (
      <Portal imageData={imageData} photoGallery />
    );
  }
  return (

    <div style={{paddingBottom: '20px'}}>
      <h1 style={{ fontSize: '2rem' }}>
        {' '}
        {data[cardPage].title}
      </h1>
      {
        photoGallery || (
        <Portal
          imageData={data}
          cardPage={cardPage}
          onLeftClick={onLeftClick}
          onRightClick={onRightClick}
        />
        )
      }
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
    </div>
  );
};
export default SelectedProject;
