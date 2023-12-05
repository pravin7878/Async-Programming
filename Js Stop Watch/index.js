let second = 0;
// let minet = 0;
let time;
let display = document.getElementsByClassName("display")

function start() {
    time = setInterval(stopwatch
        // () => {
    //     second++
    //     if(second<10){
    //         display[0].innerText = `${minet}:0${second}`
    //     }
    //    else{
    //     display[0].innerText = `${minet}:${second}`;
    //    }
    // }
    , 1000);
    console.log(time)
}

function pause() {
    clearInterval(time)
}

function Reset() {
    clearInterval(time)
    second = `00`;
    display[0].innerText = second;
}

function stopwatch(){
    let minet = Math.floor(second/60)
    let repetsecond = Math.floor(second%60)
    second++
        if(repetsecond<10){
            display[0].innerText = `0${minet}:0${repetsecond}`
        }
       else{
        display[0].innerText = `0${minet}:${repetsecond}`;
       }
}