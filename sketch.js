var svg, path
function preload() {
  svg = loadSVG('images/pendant.svg')
  frameRate(20)
}

function setup() {
  createCanvas(1000, 1000, SVG)
  image(svg, 0, 0, 1000, 1000)
  gradientStops = querySVG('#grad1 stop')
}

function draw() {
  // sky
  const red1 = 202
  const green1 = 120 - sin(frameCount / 20) * 30
  const blue1 = 150 - sin(frameCount / 20) * 30
  gradientStops[0].attribute('style', `stop-color:rgb(${red1},${green1},${blue1});stop-opacity:0.5`)
  const red2 = 202
  const green2 = 0 + sin(frameCount / 20) * 30
  const blue2 = 150 - sin(frameCount / 20) * 30
  gradientStops[1].attribute('style', `stop-color:rgb(${red2},${green2},${blue2});stop-opacity:0.5`)
  // water
  const red3 = 0
  const green3 = 120 + sin(frameCount / 20) * 30
  const blue3 = 150 + sin(frameCount / 20) * 30
  gradientStops[3].attribute('style', `stop-color:rgb(${red3},${green3},${blue3});stop-opacity:0.5`)
}
