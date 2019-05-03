// Goal: Us JS to reduce all of the manual work in association to rendering out css box shadow animations.
// Currently, I can get an array of rgba values from an Image.
// Next, I need to make sure I can take those values, and correctly build out an animation.
// After that, I need to find a way to cover the rgba values to asii-like characters, with color translations already built in so I just c&p


//Canvas
var c = document.getElementById("js-canvas");
var ctx = c.getContext("2d");

//Image
var img = document.getElementById("js-image");
var imgW = img.naturalWidth;
var imgH = img.naturalHeight;

//Array
var pixelData = [];
var rgbaValues = [];

//Set Canvas size to match the image, so we don't have to hardcode a size.
c.width = imgW;
c.height = imgH;

//Draw the image so we can get pixel data back.
ctx.drawImage(img, 0, 0);

//Get that pixel data.
pixelData = ctx.getImageData(0, 0, imgW, imgH).data;

//Transform data to rgba format.
for (var i = 0, n = pixelData.length; i < n; i += 4) {
  var r = pixelData[i];
  var g = pixelData[i + 1];
  var b = pixelData[i + 2];
  var a = pixelData[i + 3];

  rgbaValues.push({ rgba: r + ", " + g + ", " + b + ", " + a });
}

console.log(rgbaValues);
