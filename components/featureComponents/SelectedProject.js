const SelectedProject = ({ data, cardIndex }) => (
  <>
    <ul>
      Title:
      {' '}
      {data[cardIndex].title}
    </ul>
    <ul>
      src:
      {' '}
      {data[cardIndex].src}
    </ul>
  </>
);
export default SelectedProject;
