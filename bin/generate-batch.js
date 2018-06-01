'use strict'

const fs = require('fs')
const path = require('path')
const primitive = require('primitive')
const pMap = require('p-map')

const imagesPath = path.join(__dirname, 'media')

const shapeTypes = [
  'triangle',
  'ellipse',
  'rotated-ellipse',
  'rectangle',
  'rotated-rectangle',
  'random'
]

const configs = [
  {
    numSteps: 500,
    numCandidateShapes: 50,
    numCandidateMutations: 100
  }
]

const steps = new Set([
  50,
  200,
  500
])

const cases = []

fs.readdirSync(imagesPath)
  .forEach((input) => {
    shapeTypes.forEach((shapeType) => {
      cases.push({
        input,
        shapeType
      })
    })
  })

pMap(cases, async (opts) => {
  const base = path.basename(opts.input).split('.')[0].toLowerCase()
  console.log(`${opts.input} - ${opts.shapeType}`)

  await primitive({
    ...opts,
    log: console.log.bind(console),
    onStep: async (model, step) => {
      if (steps.has(step)) {
        const filename = `${base}-${opts.shapeType}-${step}.png`
        await model.context.saveImage(model.current, filename)
      }
    }
  })
})
  .then(() => {
    console.log('done rendering', cases.length, 'cases')
  }, (err) => {
    console.error('error rendering', err)
  })
