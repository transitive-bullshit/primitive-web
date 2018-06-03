/**
 * @class HomePage
 */

import React, { Component } from 'react'

import ImageEditor from '../../components/ImageEditor'
import ImageGallery from '../../components/ImageGallery'

import styles from './styles.module.css'

export default class HomePage extends Component {
  render() {
    return (
      <div className={styles.container}>
        <ImageEditor />

        <ImageGallery />
      </div>
    )
  }
}
