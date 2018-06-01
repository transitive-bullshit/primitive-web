'use strict'

const fs = require('fs')
const path = require('path')
const primitive = require('primitive')
const pMap = require('p-map')

const mediaPath = path.join(__dirname, '..', 'media')

const shapeTypes = [
  // 'ellipse',
  // 'rectangle',
  'triangle',
  'rotated-ellipse',
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

fs.readdirSync(mediaPath)
  .forEach((file) => {
    const input = path.join(mediaPath, file)

    shapeTypes.forEach((shapeType) => {
      configs.forEach((config) => {
        cases.push({
          ...config,
          input,
          shapeType
        })
      })
    })
  })

console.log(JSON.stringify(cases, null, 2))

pMap(cases, async (opts, index) => {
  const base = path.basename(opts.input).split('.')[0].toLowerCase()
  console.log()
  console.log()
  console.log(`${index}) ${opts.input} - ${opts.shapeType}`)

  console.time(index)
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
  console.timeEnd(index)
}, {
  concurrency: 1
})
  .then(() => {
    console.log('done rendering', cases.length, 'cases')
  }, (err) => {
    console.error('error rendering', err)
  })
