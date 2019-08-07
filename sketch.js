let video;
let style;
let resultImg;

function setup() {
  createCanvas(320, 250).parent('canvasContainer')

  video = createCapture(VIDEO)
  video.hide()

  resultImg = createImg('')
  resultImg.hide()

  style = ml5.styleTransfer('models/fuchun', video, modelLoaded)
}

function draw() {
  image(resultImg, 0,0,320,240)
  
}

function modelLoaded() {
  select('#status').html('Model Loaded')
  style.transfer(gotResult)
}

function gotResult(err, img) {
  resultImg.attribute('src', img.src)
  style.transfer(gotResult)
}