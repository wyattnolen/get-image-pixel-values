//Canvas
var c = document.getElementById("js-canvas");
var ctx = c.getContext("2d");

//Output
var pre = document.getElementById("js-output");

//Image
var img = document.getElementById("js-image");
var imgW = img.naturalWidth;
var imgH = img.naturalHeight;

//Array
var pixelData = [];
var rgbaValues = [];

//Colors
var c1 = "rgba(0, 0, 0, 0)";
var c2 = "rgba(82, 99, 41, 255)";
var c3 = "rgba(165, 214, 66, 255)";
var c4 = "rgba(16, 16, 16, 255)";
var c5 = "rgba(115, 173, 49, 255)";
var c6 = "rgba(189, 255, 115, 255)";
var c7 = "rgba(25, 74, 74, 255)";
var c8 = "rgba(58, 148, 148, 255)";
var c9 = "rgba(132, 239, 197, 255)";
var c10 = "rgba(49, 115, 115, 255)";
var c11 = "rgba(99, 214, 181, 255)";
var c12 = "rgba(206, 206, 206, 255)";
var c13 = "rgba(239, 33, 58, 255)";
var c14 = "rgba(173, 0, 49, 255)";
var c15 = "rgba(255, 255, 255, 255)";
var c16 = "rgba(255, 107, 99, 255)";

var m1 = "_";
var m2 = "O";
var m3 = "I";
var m4 = "?";
var m5 = "N";
var m6 = "$";
var m7 = "7";
var m8 = "=";
var m9 = "8";
var m10 = "~";
var m11 = "Z";
var m12 = "+";
var m13 = ":";
var m14 = "D";
var m15 = ".";
var m16 = ",";

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

  rgbaValues.push("rgba(" + r + ", " + g + ", " + b + ", " + a + ")");
  assignAscii(rgbaValues);
}

//Check and assign ascii character
function assignAscii(a) {
  for (var i = 0, n = a.length; i < n; i++) {
    switch (a[i]) {
      case c1:
        a[i] = m1;
        break;
      case c2:
        a[i] = m2;
        break;
      case c3:
        a[i] = m3;
        break;
      case c4:
        a[i] = m4;
        break;
      case c5:
        a[i] = m5;
        break;
      case c6:
        a[i] = m6;
        break;
      case c7:
        a[i] = m7;
        break;
      case c8:
        a[i] = m8;
        break;
      case c9:
        a[i] = m9;
        break;
      case c10:
        a[i] = m10;
        break;
      case c11:
        a[i] = m11;
        break;
      case c12:
        a[i] = m12;
        break;
      case c13:
        a[i] = m13;
        break;
      case c14:
        a[i] = m14;
        break;
      case c15:
        a[i] = m15;
        break;
      case c16:
        a[i] = m16;
        break;
    }
  }
  return a;
}

function splitOnImageWidth(a) {
  for (var i = 0, n = a.length; i < n; i++) {
    if (i % imgW === 0) {
      a[i] = '"' + a[i];
    }
    if ((i + 1) % imgW === 0) {
      a[i] = a[i] + '",\n';
    }
  }
  return a;
}

//Output ascii art to page
pre.textContent = splitOnImageWidth(rgbaValues).join("");
