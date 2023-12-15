total_vec = 1
vec__angles = [0]
vec__lengths = [10]
vec__rates = [0.1]
tracing_points = []
originX = 350;
originY = 350;
trace_individual_cirles = false

function setup() {
    createCanvas(700, 700);
    background(255);
    frameRate(60);
    totalVecSlider = createSlider(1, 100, 1); // Arguments: min, max, default value
    totalVecSlider.class('slider-styles');
    totalVecSlider.position(80, 720)

    button = createButton('Random Visualization');
    button.class('button-54');
    button.position(300, 720);
    button.mousePressed(random_vec);
    
    button_circle_trace = createButton('Trace Circles');
    button_circle_trace.class('button-54');
    button_circle_trace.position(550, 720);
    button_circle_trace.mousePressed(change_tracing_circles);


}

function random_vec() {
    window["total_vec"] = floor(random(1, 100));
    window["vec__lengths"] = [];
    window["vec__angles"] = [];
    for (i = 0; i < total_vec; i++) {
        window["vec__angles"].push(floor(random(0, 360)));
    }
    for (i = 0; i < total_vec; i++) {
        window["vec__lengths"].push((random(10, 20)));
    }
    for (i = 0; i < total_vec; i++) {
        window["vec__rates"].push((random(0, 1)));
    }
    tracing_points = []
    clear()
}

function increment_angles() {
    for (i = 0; i < total_vec; i++) {
        window["vec__angles"][i] += vec__rates[i];
    }
}

function draw_recursive_lines(originx, originy, vec) {
    if (vec < 1) return
    line_X_end = originx + vec__lengths[vec - 1] * sin(vec__angles[vec - 1]);
    line_Y_end = originy + vec__lengths[vec - 1] * cos(vec__angles[vec - 1]);
    line(originx, originy, line_X_end, line_Y_end);
    draw_recursive_lines(line_X_end, line_Y_end, vec - 1);
    if (vec == 1) tracing_points.push({
        "x": line_X_end,
        "y": line_Y_end
    });

}

function draw_recursive_lines_show_circles(originx, originy, vec) {
    if (vec < 1) return
    line_X_end = originx + vec__lengths[vec - 1] * sin(vec__angles[vec - 1]);
    line_Y_end = originy + vec__lengths[vec - 1] * cos(vec__angles[vec - 1]);
    tracing_points.push({
        "x": line_X_end,
        "y": line_Y_end
    });
    line(originx, originy, line_X_end, line_Y_end);
    draw_recursive_lines(line_X_end, line_Y_end, vec - 1);
}
function  convertToDegrees(degrees){
    return (degrees * Math.PI) / 180;
}
function draw_tracing_points() {
    noFill();
  beginShape();
  for (let i = 0; i < tracing_points.length; i++) {
    let interColor = lerpColor(color(0, 0, 255), color(255, 0, 0), i / (tracing_points.length - 1));
    stroke(interColor);
     // Adjust the stroke weight based on the position in the array
    let weight = map(i, 0, tracing_points.length - 1, 0, 1);
    strokeWeight(weight);
    vertex(tracing_points[i].x, tracing_points[i].y);
  }
  endShape();
  noStroke(); // reset stroke to default for other elements
}

function change_tracing_circles() {
    window["trace_individual_cirles"] = window["trace_individual_cirles"] ? false : true;
    random_vec();
}

function draw() {
    background(0);
    stroke(255);
    if (trace_individual_cirles) draw_recursive_lines(originX, originY, total_vec);
    else draw_recursive_lines_show_circles(originX, originY, total_vec);
    increment_angles();
    draw_tracing_points();

}