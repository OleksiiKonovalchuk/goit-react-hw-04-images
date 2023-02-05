import React from 'react';
import css from './imageGalleryItem.module.scss';
import PropTypes from 'prop-types';
const ImageGalleryItem = ({ hits, clicked }) => {
  if (hits.length) {
    const items = hits.map(({ id, webformatURL, largeImageURL }) => {
      return (
        <li
          onClick={() => clicked(largeImageURL)}
          className={css.item}
          key={id}
        >
          <img
            className={css.itemImage}
            alt="img"
            src={webformatURL}
            srcbig={largeImageURL}
          />
        </li>
      );
    });
    return items;
  }
};
export default ImageGalleryItem;
ImageGalleryItem.propTypes = {
  hits: PropTypes.array,
  clicked: PropTypes.func,
};
