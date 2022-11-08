async function starter() {
    let response = await fetch('https://api.adviceslip.com/advice');
    let data = await response.json();
    return data;  
}

function finisher(value) {
    console.log(value);
}

starter().then(finisher);
console.log("HELLo");