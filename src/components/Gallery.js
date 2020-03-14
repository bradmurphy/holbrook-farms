import React from 'react';
import ImageGallery from 'react-image-gallery';

const Gallery = ({images, pos}) => (
    <ImageGallery items={images} thumbnailPosition={pos} />
);

export default Gallery;