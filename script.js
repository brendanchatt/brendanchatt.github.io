var greeting = 'hello, my name is Brendan.  Thanks for spending the time to check out my little site. I don\'t have much to say but as a software developer I\'m kind of expected to have one. I did this typewriter effect and some other little effects to showcase some little skills as you may have guessed. ^>> That said, before I mention my main \'skills,\' or technologies that I have the most experience with, I feel I should empasize that I try to be be a resourceful problem solver yada yada, meaning, as all developers, I learn new things every day, and am just quicker to the draw with the tools I\'ve seasoned my career with.  I just published this site to github pages like a minute ago.. so more to come hopefully, thx. ^ Please checkout the following list of my skills';

function onloadBody() {
    var gt = document.getElementById("greeting-text");
    // scroll every 2500 ms to keep the bottom of the text in the middle of the window 
    //  (actually a little above. middle would be divide by 2 instead of 2.5)
    var intervalId = setInterval(() => {
        document.getElementById("typewriter-container").scrollTo({
            // this puts the bottom of the greeting-text a little above the middle
            top: gt.offsetHeight - (window.innerHeight / 2.5),
            behavior: "smooth",
            });
        // It's good to see that there may be more attempts than scrolls
        console.log('scroll attempted');
    }, 1000); 
                        //(tw.offsetTop + tw.offsetHeight) )})
    // start the typewriter
    typeWriter(greeting, gt, () => clearInterval(intervalId));
    //g.innerHTML += greeting;
}


async function typeWriter(txt, element, onFinished) {
    
    for (let char of txt) {
        switch(char) {
            case '^':
                element.innerHTML += '</br>';
                break;
            case '>':
                element.innerHTML += '&nbsp;'
                break;
            default:
                element.innerHTML += char
        }
        
        await sleep(char == '.' ? 750 : char == ',' ? 500 : 40.0);
    } 
    onFinished?.();
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}


// var roughTypeTime = greeting.length * (typeSleep * 1.5);
// setTimeout(()=>{        
//     var skills = document.getElementById("skills-list");

//     skills.style.visibility = "visible";
//     skills.style.animation = "fadeIn 2s";

// }, roughTypeTime);