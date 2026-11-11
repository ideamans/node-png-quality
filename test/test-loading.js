const test = require('ava').default
const PngCompare = require('../')
const Path = require('path')

test('Loading png file', async t => {
  const png = await PngCompare.loadPngFile(Path.join(__dirname, 'sample/white2x2-png8.png'))

  t.is(png.width, 2, 'width is 2')
  t.is(png.height, 2, 'height is 2')
});