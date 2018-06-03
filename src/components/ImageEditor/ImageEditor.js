/**
 * @class ImageEditor
 */

import React, { Component } from 'react'
import { findDOMNode } from 'react-dom'

// import BlockImage from 'react-block-image'
import primitive from 'primitive'

import styles from './styles.module.css'

export default class ImageEditor extends Component {
  componentDidMount() {
    const output = findDOMNode(this._canvas)
    if (!output) return

    primitive({
      input: 'https://storage.googleapis.com/transitive-bullshit-primitive/monalisa.png',
      output,
      numSteps: 500
    })
  }

  render() {
    return (
      <div className={styles.container}>
        <div className={styles.config}>
          TODO: config
        </div>

        <div className={styles.editor}>
          <canvas
            className={styles.canvas}
            width={512}
            height={512}
            ref={this._canvasRef}
          />
        </div>
      </div>
    )
  }

  _canvasRef = (canvas) => {
    this._canvas = canvas
  }
}
