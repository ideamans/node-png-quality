import test from 'ava'
import PngCompare from '../'
import Path from 'path'

test('Compare png8 and png24', async t => {
  const mse = await PngCompare.mse(
    Path.join(__dirname, 'sample/white2x2-png8.png'),
    Path.join(__dirname, 'sample/white2x2-black1x1-png24.png')
  )
  t.is(mse, 0.25)
});

test('Compare png8 and gray', async t => {
  const mse = await PngCompare.mse(
    Path.join(__dirname, 'sample/white2x2-png8.png'),
    Path.join(__dirname, 'sample/white2x2-black1x1-gray.png')
  )
  t.is(mse, 0.25)
});

test('Compare png24 and gray(same)', async t => {
  const mse = await PngCompare.mse(
    Path.join(__dirname, 'sample/white2x2-black1x1-png24.png'),
    Path.join(__dirname, 'sample/white2x2-black1x1-gray.png')
  )
  t.is(mse, 0)
});