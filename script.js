// Author: Me! Brendan, of course.
// Started in February 2024
// License: Idk you can do whatever you want with this code, thx
// Note: it took considerable iteration to make the code this simple
//  Don't let the simplicity fool you

var greeting = 'Greetings, Brendan here.  Thanks for stopping by. I made this site \'cause I feel like I\'m of expected to have one as a software developer these days. ^>> Before I mention my main \'skills,\' or the tools that I have the most experience with, I feel I should empasize that I try to be be a resourceful problem solver, and I learn new things every day; I\'m just quicker to the draw with the tools I\'ve seasoned my career with. ^ Please checkout the following list of my skills';

const gs = document.getElementById("greeting-section");
const gt = document.getElementById("greeting-text");

const mobile = window.matchMedia("(max-width: 700px)")

// // scroll past header after 5 seconds
// setTimeout(()=>{
//     window.scroll({top: document.getElementsByClassName('part')[0].offsetHeight, behavior: 'smooth'});
// }, 2000);

// // scroll every 1000 ms to keep the bottom of the text in view
// var scrollIntervalId = setInterval(() => {
//     console.log(gt.offsetHeight);
//     gs.scrollTo(0, gt.offsetHeight - (gs.offsetHeight /2));
// }, 1000); 

// start the typewriter
var cancel = typewriter(greeting, gt, () => {
    clearInterval(scrollIntervalId);
    finishType();
});

function greetingSkip() {
    cancel = true;
    finishType();
}

function finishType() {
    document.getElementById('greeting-skip').style.visibility = 'hidden';
    document.getElementById('greeting-container').style.height = '100vh';
    gs.style.overflowY = 'scroll';
}