import React from 'react';
import Gallery from 'react-grid-gallery';

const IMAGES = [{
  src: '/bug.jpg',
  thumbnail: '/bug.jpg',
  thumbnailWidth: 320,
  thumbnailHeight: 174,
  isSelected: true,
  caption: 'After Rain (Jeshu John - designerspics.com)',
},
{
  src: '/flower.jpg',
  thumbnail: '/flower.jpg',
  thumbnailWidth: 320,
  thumbnailHeight: 212,
  tags: [{ value: 'Ocean', title: 'Ocean' }, { value: 'People', title: 'People' }],
  caption: 'Boats (Jeshu John - designerspics.com)',
},

{
  src: '/lake.jpg',
  thumbnail: '/lake.jpg',
  thumbnailWidth: 320,
  thumbnailHeight: 212,
}, {
  src: '/scenery.jpg',
  thumbnail: '/scenery.jpg',
  thumbnailWidth: 320,
  thumbnailHeight: 174,
  isSelected: true,
  caption: 'After Rain (Jeshu John - designerspics.com)',
},
{
  src: '/snake.jpg',
  thumbnail: '/snake.jpg',
  thumbnailWidth: 320,
  thumbnailHeight: 212,
  tags: [{ value: 'Ocean', title: 'Ocean' }, { value: 'People', title: 'People' }],
  caption: 'Boats (Jeshu John - designerspics.com)',
},

{
  src: 'https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg',
  thumbnail: 'https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_n.jpg',
  thumbnailWidth: 320,
  thumbnailHeight: 212,
}, {
  src: 'https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg',
  thumbnail: 'https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_n.jpg',
  thumbnailWidth: 320,
  thumbnailHeight: 174,
  isSelected: true,
  caption: 'After Rain (Jeshu John - designerspics.com)',
},
{
  src: 'https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg',
  thumbnail: 'https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_n.jpg',
  thumbnailWidth: 320,
  thumbnailHeight: 212,
}];
const ImageGalleryPreview = () => (
  <Gallery images={IMAGES} />
);

export default ImageGalleryPreview;
