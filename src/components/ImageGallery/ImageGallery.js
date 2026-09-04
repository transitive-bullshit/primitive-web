/**
 * @class ImageGallery
 */

import React, { Component } from 'react'

import styles from './styles.module.css'

const images = [
  `${process.env.PUBLIC_URL}/media/artem-bali-578205-unsplash-triangle-500.gif`,
  `${process.env.PUBLIC_URL}/media/caleb-woods-248879-unsplash-rotated-ellipse-500.gif`
]

export default class ImageGallery extends Component {
  render() {
    return (
      <div className={styles.container}>
        {images.map((image) => (
          <img
            key={image}
            className={styles.image}
            src={image}
            alt='Primitive approximation'
            width={600}
            height={400}
          />
        ))}
      </div>
    )
  }
}
