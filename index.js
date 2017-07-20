var sharp = require('sharp')
var TextToSVG = require('text-to-svg')
var textToSVG = TextToSVG.loadSync('./assets/font.ttf')

var size = 1500

var section = textToSVG.getPath("GUIDE", {
  x: 40,
  y: 501,
  fontSize: 42,
  anchor: 'bottom',
  attributes: {
    fill: '#444'
  }
})

var line1 = textToSVG.getPath("ICONIC", {
  x: 20,
  y: 597,
  fontSize: 75,
  anchor: 'bottom',
  attributes: {
    fill: '#fff'
  }
})

var line2 = textToSVG.getPath("RESTAURANTS", {
  x: 20,
  y: 669,
  fontSize: 75,
  anchor: 'bottom',
  attributes: {
    fill: '#fff'
  }
})

var text = new Buffer(
`<svg id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 683 683">

  <path fill="#fff" class="st1" d="M175.6 502.6h-142c-7.2 0-13-5.8-13-13v-29.5c0-7.2 5.8-13 13-13h142c7.2 0 13 5.8 13 13v29.5c0 7.2-5.8 13-13 13z"/>

  ${section}
  ${line1}
  ${line2}
</svg>`
)

sharp(text).resize(size).toBuffer().then(data => {
  sharp('./assets/chicken.jpg')
  .resize(size)
  .overlayWith(data)
  .toFile('output.png', (err, info) => {
    console.log(err)
    console.log(info)
  })
})