let images = [
    {src:"./background-2419761_1280.jpg"},
   {src:"./background-2579710_1280.jpg"},
   {src:"./background-2743840_1280.jpg"} ,
   {src:"./background-3516145_1280.jpg"} ,
   {src:"./bridge-53769_1280.jpg"} ,
   {src:"./fir-tree-1856343_1280.jpg"} ,
   {src:"./istockphoto-1473117037-1024x1024.jpg"} ,
   {src:"./istockphoto-1573329496-1024x1024.jpg"} ,
   {src:"./mountain-landscape-2031539_1280.jpg"}, 
   {src:"./mountains-1587287_1280.jpg"} ,
   {src:"./mountains-736886_1280.jpg"}, 
   {src:"./mountains-8404362_1280.jpg"}, 
   {src:"./mushroom-8390888_1280.jpg"} ,
   {src:"./road-1072821_1280.jpg"} ,
   {src:"./road-1072823_1280.jpg"} ,
]

let slid= document.getElementById("slider");
let img = document.createElement('img');

let i = 0;

function prev(){
    if(i==0){
        i=images.length-1 
    }
    else{
        i--
    }
}

function next(){
    if(i==images.length-1){
         i= 0
         slider.append(img) 
    }
    else{
        i++
    }
}

let incriment = function (){
    i++
    img.src = images[i].src
    if(i==images.length-1){
        i=0
    }
  
}
let aato;
function start(){
    slider.append(img)
    console.log(slid)
   aato  = setInterval(incriment,1500)
}

function stop(){
    clearInterval(aato)
}



