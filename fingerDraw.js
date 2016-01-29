var canvas = document.getElementById("leap-overlay");

// fullscreen
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// create a rendering context
var ctx = canvas.getContext("2d");
ctx.translate(canvas.width/2,canvas.height);

//setColorByFingerType
function setColorByFingerType(fingerType) {
  switch(fingerType) {
    //Thumb
    case 0:
      ctx.fillStyle = "rgba(0,0,255,0.7)";
    break;
    //Index
    case 1:
      ctx.fillStyle = "rgba(0,255,0,0.7)";
    break;
    //Middle
    case 2:
      ctx.fillStyle = "rgba(255,0,0,0.7)";
    break;
    //Ring
    case 3:
      ctx.fillStyle = "rgba(0,255,255,0.7)";
    break;
    //Pinky
    case 4:
      ctx.fillStyle = "rgba(0,0,0,0.7)";
    break;
  }
}

// render each frame
function draw(obj) {
  // clear last frame
  ctx.clearRect(-canvas.width/2,-canvas.height,canvas.width,canvas.height);

  // render circles based on pointable positions
  var fingers = obj.pointables;
  for (var i in fingers) {
    // get the pointable's position
    var finger = fingers[i];
    var pos = finger.tipPosition;

    // create a circle for each pointable
    setColorByFingerType(finger.type);
    var radius = Math.min(600/Math.abs(pos[2]),20);
    ctx.beginPath();
    console.log(pos[0]);
    ctx.arc(pos[0]-radius/2,-pos[1]-radius/2,radius,0,2*Math.PI);
    ctx.fill();
  }
};

// listen to Leap Motion
Leap.loop(draw);