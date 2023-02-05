// import React, { Component } from 'react';
import React from 'react';
import css from './image-gallery.module.css';
const ImageGallery = ({ children }) => {
  return <ul className={css.gallery}>{children}</ul>;
};

export default ImageGallery;
