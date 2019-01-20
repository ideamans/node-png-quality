import test from 'ava'
import PngCompare from '../'
import Path from 'path'

test('Loading png file', async t => {
  const png = await PngCompare.loadPngFile(Path.join(__dirname, 'sample/white2x2-png8.png'))

  t.is(png.width, 2, 'width is 2')
  t.is(png.height, 2, 'height is 2')
});