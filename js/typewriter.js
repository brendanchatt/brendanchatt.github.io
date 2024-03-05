function typewriter(txt, element, onfinish) {
    cancel = false;

    // detach this functionality so we can return the cancel variable
    type(txt, element).then((_)=> onfinish?.());
    
    return cancel;
}

async function type(txt, element) {
    for (let char of txt) {
        if(cancel){ 
            // upon cancellation, our current default behavior is to
            // 1. obviously cancel the typing with 'break'
            // 2. complete the text. This behavior may become configurable
            element.innerHTML = txt.replace('^', '</br>').replace('>', '$nbsp');
            break;
        }

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
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}