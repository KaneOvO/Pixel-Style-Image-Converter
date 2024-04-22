let imgSrc = null;

document.getElementById("fileInput").addEventListener("change", function (e) {
  let file = e.target.files[0];
  let reader = new FileReader();
  reader.onload = function (event) {
    imgSrc = event.target.result;
    convertToPixelArt();
  };
  reader.readAsDataURL(file);
});

document.getElementById("scaleSlider").addEventListener("input", function () {
  document.getElementById("scaleValue").innerText = this.value;
});

function convertToPixelArt() {
  if (!imgSrc) {
    alert("Please upload an image!");
    return;
  }
  let img = new Image();
  img.onload = function () {
    let scaleFactor = parseFloat(document.getElementById("scaleSlider").value);
    let src = cv.imread(img);
    let dst = new cv.Mat();
    let dsize = new cv.Size(img.width * scaleFactor, img.height * scaleFactor);
    cv.resize(src, dst, dsize, 0, 0, cv.INTER_AREA);
    cv.resize(
      dst,
      dst,
      new cv.Size(img.width, img.height),
      0,
      0,
      cv.INTER_NEAREST
    );
    cv.imshow("canvasOutput", dst);
    src.delete();
    dst.delete();
    downloadImage();
  };
  img.src = imgSrc;
}

function downloadImage() {
  let download = document.getElementById("download");
  download.style.display = "inline";
  download.addEventListener("click", function () {
    let canvas = document.getElementById("canvasOutput");
    let image = canvas.toDataURL("image/png", 1.0);
    let link = document.createElement("a");
    link.download = "pixel_art.png";
    link.href = image;
    link.click();
  });
}

let canvas = document.getElementById("canvasOutput");
