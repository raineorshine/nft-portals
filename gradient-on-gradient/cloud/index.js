let svg, path

const stopColor = ({ r, g, b }) => `stop-color:rgb(${r},${g},${b})`

function preload() {
  svg = loadSVG('index.svg')
  frameRate(20)
}

function setup() {
  const size = Math.min(window.innerWidth, window.innerHeight)
  const xPadding = Math.max(0, window.innerWidth - window.innerHeight)
  const yPadding = Math.max(0, window.innerHeight - window.innerWidth)
  const yMargin = size / 20
  createCanvas(window.innerWidth, window.innerHeight - yMargin, SVG)
  image(svg, xPadding / 2, yPadding / 2 + yMargin, size, size - yMargin * 2)
  gradientOuter = querySVG('#gradient-outer stop')
  gradientInner = querySVG('#gradient-inner stop')
}

function draw() {
  // outer
  gradientOuter[0].attribute(
    'style',
    stopColor({
      r: 180 - sin(frameCount / 20) * 20,
      g: 10,
      b: 20,
    }),
  )
  gradientOuter[1].attribute(
    'style',
    stopColor({
      r: 20,
      g: 10,
      b: 202 - sin(frameCount / 20) * 20,
    }),
  )

  // inner
  gradientInner[0].attribute(
    'style',
    stopColor({
      r: 20,
      g: 150 - sin(frameCount / 20) * 20,
      b: 0,
    }),
  )
  gradientInner[1].attribute(
    'style',
    stopColor({
      r: 20,
      g: 10,
      b: 210 - sin(frameCount / 20) * 20,
    }),
  )
}
