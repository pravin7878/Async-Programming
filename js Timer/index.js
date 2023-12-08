
let inp1 = document.querySelector(".inp1")
let inp2 = document.querySelector(".inp2")
let inp3 = document.querySelector(".inp3")

function start() {
    setInterval(timer, 1000);
    // console.log(inp3[0].value)
    // console.log(hours)
}

function stop() {

}

function reset() {

}
function timer() {
    let hours = inp1.value;
    let minet = inp2.value;
    let second = inp3.value;
    // minet = Math.floor(second/60) 
    // let repeatsecons = Math.floor(second%60) 
    // second--
    // minet == Math.floor(minet/60)
    // inp3.value = second;
    // inp2.value = minet;
    // inp1.value = hours;

    // for (let i = minet; i >= 0; i--) {
    //     for (let j = 60; j >= 0; j--) {
    //         // console.log(minet, j)
    //         j = inp3.value

    //     }
    //     i = inp2.value
    // }

}