# FourierPatternsVisualizer
Generates interesting random patterns from Fourier Vectors. Written in P5.js
Canvas size is set to 700x700 pixels.
The frame rate is set to 60 frames per second.
Buttons are created for triggering random visualizations and changing colors.



## Weblink : https://at-75.github.io/FourierPatternsVisualizer/

## Sample Images:

![](https://github.com/at-75/FourierPatternsVisualizer/blob/at-75-patch-1/sample_images/img1.png)

## Variables
### total_vec: Number of vectors to be visualized.
vec__angles: Array containing the angles of the vectors in degrees.
vec__lengths: Array containing the lengths of the vectors.
vec__rates: Array containing the rotation rates of the vectors.
tracing_points: Array storing the points of the vector traces.
originX and originY: Coordinates of the origin for vector visualization.
startColor and endColor: Colors for visualizing vector traces.
### Constants:
GLOBAL_SPEED_MAX: Maximum rotation speed of vectors.
GLOBAL_VECTORS_MAX: Maximum number of vectors.
GLOBAL_LEN_VECTORS_MAX: Maximum length of vectors.
SPEED_INCREMENT: Increment value for rotation speed.
GLOBAL_VEC_DEVIATION: Deviation for the initial vector angles.
