/**
 * @class ImageGallery
 */

import React, { Component } from 'react'

import BeforeAfterSlider from 'react-before-after-slider'

import images from '../../assets/images.json'
import styles from './styles.module.css'

const sizes = {
  50: 0,
  200: 1,
  500: 2
}

export default class ImageGallery extends Component {
  render() {
    return (
      <div className={styles.container}>
        {images.map((image, i) => {
          const { shape, size } = image
          const index = sizes[size]

          return (
            <BeforeAfterSlider
              key={i}
              className={styles.image}
              before={image.base}
              after={image[shape][index]}
              width={512}
              height={320}
            />
          )
        })}
      </div>
    )
  }
}
