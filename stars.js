var content = cnv.getContext("2d");
var width = window.innerWidth;
var height = window.innerHeight;


cnv.width = width;
cnv.height = height;
content.fillStyle = "#000112";
content.fillRect(0, 0, width, height);
// set some blur effect;
content.shadowColor = "#EEEEEE";
content.shadowBlur = 12;

function animate_stars() {
  
  // set a random position and size of stars;
  var x = width * Math.random();
  var y = height * Math.random();
  var radius = 3 * Math.random();

  // let us draw the stars
  content.beginPath();
  content.fillStyle = "white";
  content.arc(x, y, radius, 0, Math.PI * 2);
  content.fill();

  setTimeout(animate_stars, 100);
}
animate_stars();
