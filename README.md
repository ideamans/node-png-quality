Calculates MSE/PSNR about two PNG images.

# Usage

```
const psnr = PngCompare.mse('path/to/first.png', 'path/to/second.png')
// == 0.25

const psnr = PngCompare.psnr('path/to/first.png', 'path/to/second.png')
// == 6.020599913279624
```

These almost same as MSE/PSNR by ImageMagick.

```
compare -colorspace RGB -metric MSE path/to/first.png path/to/second.png null:
# == 0.25

compare -colorspace RGB -metric PSNR path/to/first.png path/to/second.png null:
# == 6.0206
```