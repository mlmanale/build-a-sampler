//const player = new Tone.Player("sounds/boing.mp3").toDestination();

const sounds = new Tone.Players({

  "sound1": "sounds/slippy.mp3",
  "sound2": "sounds/bonk.mp3",
  "sound3": "sounds/boing.mp3",
  "sound4": "sounds/ribbit.mp3"

}).toDestination();

const delay = new Tone.FeedbackDelay("5n", 0.4);

function setup() {
  createCanvas(400, 400);
  sounds.connect(delay);
  delay.toDestination();
  
  fSlider = createSlider(0., 1., 0.5, 0.05);
  fSlider.position(200, 205);
  fSlider.mouseReleased( () => {
    delay.feedback.value = fSlider.value();
  })

}

function draw() {
  background(220);
  textAlign(CENTER);
  textSize(20);
  fill('black');
  text("press a button, see what happens",200,195);
  textSize(15);
  text("change feedback: ", 135, 215);
  noStroke();
  fill('red');
  rect(30,20,150);
  fill('yellow');
  rect(220,20,150);
  fill('blue');
  rect(30,230,150);
  fill('green');
  rect(220,230,150);
}

function mousePressed() {
  if ((mouseX >= 30 && mouseX <= 180) && (mouseY >= 20 && mouseY <=170)) {
    sounds.player("sound1").start();
  } else if ((mouseX >= 220 && mouseX <= 370) && (mouseY >= 20 && mouseY <=170)) {
    sounds.player("sound2").start();
  }
   else if ((mouseX >= 30 && mouseX <= 180) && (mouseY >= 230 && mouseY <=380)) {
    sounds.player("sound3").start();
  } else if ((mouseX >= 220 && mouseX <= 370) && (mouseY >= 230 && mouseY <=380)) {
    sounds.player("sound4").start();
  } 
}