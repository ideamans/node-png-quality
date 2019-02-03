import test from 'ava'
import PngCompare from '../'
import Path from 'path'
import Fs from 'fs'

test('Compare png8 and png24', async t => {
  const psnr = await PngCompare.psnr(
    Path.join(__dirname, 'sample/white2x2-png8.png'),
    Path.join(__dirname, 'sample/white2x2-black1x1-png24.png')
  )
  t.is(psnr, 6.020599913279624)
})

test('Compare png8 and gray', async t => {
  const psnr = await PngCompare.psnr(
    Path.join(__dirname, 'sample/white2x2-png8.png'),
    Path.join(__dirname, 'sample/white2x2-black1x1-gray.png')
  )
  t.is(psnr, 6.020599913279624)
})

test('Compare png24 and gray(same)', async t => {
  const psnr = await PngCompare.psnr(
    Path.join(__dirname, 'sample/white2x2-black1x1-png24.png'),
    Path.join(__dirname, 'sample/white2x2-black1x1-gray.png')
  )
  t.is(psnr, Infinity)
})

test('Compare png8 and png24 between buffers', async t => {
  const bufferA = Fs.readFileSync(Path.join(__dirname, 'sample/white2x2-png8.png'))
  const bufferB = Fs.readFileSync(Path.join(__dirname, 'sample/white2x2-black1x1-png24.png'))
  const psnr = await PngCompare.psnr(bufferA, bufferB)
  t.is(psnr, 6.020599913279624)
})
