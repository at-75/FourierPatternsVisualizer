let total_vec = 3;
let vec__angles = [0, 90, 189];
let vec__lengths = [10, 15, 17];
let vec__rates = [0.1, 0.05, 0.08];
let tracing_points = [];
let originX = 350;
let originY = 350;
let startColor;
let endColor;
let GLOBAL_SPEED_MAX = 0.1
let GLOBAL_VECTORS_MAX = 100
let GLOBAL_LEN_VECTORS_MAX = 25
let SPEED_INCREMENT = 0.05
let GLOBAL_VEC_DEVIATION = 360

function setup() {

   createCanvas(700, 700);
   background(255);
   frameRate(60);

   button = createButton('Random Visualization');
   button.class('button-54');
   button.position(100, 720);
   button.mousePressed(random_vec);

   button_circle_trace = createButton('Change Colors');
   button_circle_trace.class('button-54');
   button_circle_trace.position(350, 720);
   button_circle_trace.mousePressed(change_tracing_circles);

   startColor = color(random(255), random(255), random(255));
   endColor = color(random(255), random(255), random(255));
}

function random_vec() {
   total_vec = floor(random(1, GLOBAL_VECTORS_MAX));
   vec__lengths = [];
   vec__angles = [];
   for (let i = 0; i < total_vec; i++) {
      vec__angles.push(floor(random(0, convertToDegrees(GLOBAL_VEC_DEVIATION))));
   }
   for (let i = 0; i < total_vec; i++) {
      vec__lengths.push((random(0, GLOBAL_LEN_VECTORS_MAX)));
   }
   for (let i = 0; i < total_vec; i++) {
      vec__rates.push((random(0, GLOBAL_SPEED_MAX)));
   }
   tracing_points = [];
   clear();
}

function increment_angles() {
   for (let i = 0; i < total_vec; i++) {
      vec__angles[i] += vec__rates[i];
   }
}

function draw_recursive_lines(originx, originy, vec) {
   if (vec < 1) return;
   let line_X_end = originx + vec__lengths[vec - 1] * sin(vec__angles[vec - 1]);
   let line_Y_end = originy + vec__lengths[vec - 1] * cos(vec__angles[vec - 1]);
   strokeWeight(0.75);
   line(originx, originy, line_X_end, line_Y_end);
   draw_recursive_lines(line_X_end, line_Y_end, vec - 1);
   if (vec == 1) {
      tracing_points.push({
         "x": line_X_end,
         "y": line_Y_end
      });
   }
}

function convertToDegrees(degrees) {
   return (degrees * Math.PI) / 180;
}

function draw_tracing_points() {
   noFill();
   for (let i = 0; i < tracing_points.length; i++) {
      let interColor = lerpColor(startColor, endColor, i / (tracing_points.length - 1));
      stroke(interColor);
      strokeWeight((i/tracing_points.length)*1.5);
      ellipse(tracing_points[i].x, tracing_points[i].y, 1, 1);
   }
   noStroke();
}

function change_tracing_circles() {
   startColor = color(random(255), random(255), random(255));
   endColor = color(random(255), random(255), random(255));
   random_vec();
}

function draw() {
   background(0);
   stroke(255);
   draw_recursive_lines(originX, originY, total_vec);
   increment_angles();
   draw_tracing_points();
}