var svg, path
function preload() {
  svg = loadSVG('images/pendant.svg')
  frameRate(20)
}

function setup() {
  createCanvas(600, 600, SVG)
  image(svg, 0, 0, 600, 600)
  path = querySVG('path')[1]
}

function draw() {
  path.attribute('stroke-width', frameCount % 20)
}
