let images = [
    { src: "./image/background-2419761_1280.jpg" },
    { src: "./image/background-2579710_1280.jpg" },
    { src: "./image/background-2743840_1280.jpg" },
    { src: "./image/background-3516145_1280.jpg" },
    { src: "./image/bridge-53769_1280.jpg" },
    { src: "./image/fir-tree-1856343_1280.jpg" },
    { src: "./image/istockphoto-1473117037-1024x1024.jpg" },
    { src: "./image/istockphoto-1573329496-1024x1024.jpg" },
    { src: "./image/mountain-landscape-2031539_1280.jpg" },
    { src: "./image/mountains-1587287_1280.jpg" },
    { src: "./image/mountains-736886_1280.jpg" },
    { src: "./image/mountains-8404362_1280.jpg" },
    { src: "./image/mushroom-8390888_1280.jpg" },
    { src: "./image/road-1072821_1280.jpg" },
    { src: "./image/road-1072823_1280.jpg" },
]

let slid = document.getElementById("slider");

let img = document.createElement('img');
slider.append(img)
console.log(slid)

let i = 0;
let aato;
img.src = images[i].src
function prev() {
    clearInterval(aato)
    img.src = images[i].src
    if (i == 0) {
        i = images.length - 1
    }
    else {
        i--
    }
    slider.append(img)
    console.log(slid)
}

function next() {
    clearInterval(aato)
    img.src = images[i].src
    if (i == images.length - 1) {
        i = 0
    }
    else {
        i++
    }
    slider.append(img)
    console.log(slid)
}

let incriment = function () {
    i++
    img.src = images[i].src
    if (i == images.length - 1) {
        i = 0
    }

}

function start() {
    slider.append(img)
    console.log(slid)
    aato = setInterval(incriment, 1500)
}

function stop() {
    clearInterval(aato)
}



