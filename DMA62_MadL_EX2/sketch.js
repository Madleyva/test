let loadedSVG;

function preload() {
  loadedSVG = loadSVG('assets/cubismCode.svg')
}

function setup() {
  createCanvas(400, 400);

}

function draw() {
  background(220);

  if (loadedSVG){
    image(loadedSVG, 0, 0, 400, 400);
  }

}
