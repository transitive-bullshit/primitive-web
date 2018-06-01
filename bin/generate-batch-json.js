'use strict'

const fs = require('fs')
const path = require('path')

const mediaPath = path.join(__dirname, '..', 'media')

const cases = new Set()
const images = [ ]

fs.readdirSync(mediaPath)
  .forEach((file) => {
    const base = path.basename(file).split('unsplash')[0].toLowerCase() + 'unsplash'
    cases.add(base)
  })

cases.forEach((v) => {
  const base = `https://storage.googleapis.com/transitive-bullshit-primitive/${v}`

  images.push({
    base: `${base}.jpg`,
    triangle: [
      `${base}-triangle-50.png`,
      `${base}-triangle-200.png`,
      `${base}-triangle-500.png`
    ],
    rectangle: [
      `${base}-rotated-rectangle-50.png`,
      `${base}-rotated-rectangle-200.png`,
      `${base}-rotated-rectangle-500.png`
    ],
    ellipse: [
      `${base}-rotated-ellipse-50.png`,
      `${base}-rotated-ellipse-200.png`,
      `${base}-rotated-ellipse-500.png`
    ],
    random: [
      `${base}-random-50.png`,
      `${base}-random-200.png`,
      `${base}-random-500.png`
    ]
  })
})

console.log(JSON.stringify(images, null, 2))
