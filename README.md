# Fourier Patterns Visualizer

Generates interesting random patterns from Fourier Vectors. Written in P5.js
Canvas size is set to 700x700 pixels.
The frame rate is set to 60 frames per second.
Buttons are created for triggering random visualizations and changing colors.

## Weblink : https://at-75.github.io/FourierPatternsVisualizer/

## Sample Images:

![Image 1](https://github.com/at-75/FourierPatternsVisualizer/blob/at-75-patch-1/sample_images/img1.png)
![Image 2](https://github.com/at-75/FourierPatternsVisualizer/blob/at-75-patch-1/sample_images/img1_2.png)

# Vector Visualization

This Processing script generates a dynamic visualization of vectors and their traces on a canvas. Vectors are represented by lines with varying lengths and angles, and their traces are visualized through colored circles.

## Variables

- `total_vec`: Number of vectors to be visualized.
- `vec__angles`: Array containing the angles of the vectors in degrees.
- `vec__lengths`: Array containing the lengths of the vectors.
- `vec__rates`: Array containing the rotation rates of the vectors.
- `tracing_points`: Array storing the points of the vector traces.
- `originX` and `originY`: Coordinates of the origin for vector visualization.
- `startColor` and `endColor`: Colors for visualizing vector traces.
- Constants:
  - `GLOBAL_SPEED_MAX`: Maximum rotation speed of vectors.
  - `GLOBAL_VECTORS_MAX`: Maximum number of vectors.
  - `GLOBAL_LEN_VECTORS_MAX`: Maximum length of vectors.
  - `SPEED_INCREMENT`: Increment value for rotation speed.
  - `GLOBAL_VEC_DEVIATION`: Deviation for the initial vector angles.

## Setup

- Canvas size is set to 700x700 pixels.
- The frame rate is set to 60 frames per second.
- Buttons are created for triggering random visualizations and changing colors.

## Functions

1. `random_vec()`: Generates random vector parameters, including angles, lengths, and rotation rates, for a new visualization.
2. `increment_angles()`: Increments the angles of the vectors based on their rotation rates.
3. `draw_recursive_lines(originx, originy, vec)`: Recursively draws lines representing vectors and collects tracing points.
4. `convertToDegrees(degrees)`: Converts degrees to radians.
5. `draw_tracing_points()`: Draws circles at tracing points with colors interpolated between `startColor` and `endColor`.
6. `change_tracing_circles()`: Changes the colors for visualizing vector traces and triggers a new random vector setup.
7. `draw()`: Main draw function that handles the overall visualization, including vector lines, tracing points, and angle increments.

