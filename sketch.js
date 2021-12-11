var svg, path
function preload() {
  svg = loadSVG('test.svg')
  frameRate(20)
}

function setup() {
  createCanvas(800, 800, SVG)
  image(svg, 0, 0, 800, 800)
  path = querySVG('path')[1]
}

function draw() {
  path.attribute('stroke-width', frameCount % 20)
}
