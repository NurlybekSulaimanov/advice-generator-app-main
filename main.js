async function starter() {
    let response = await fetch('https://api.adviceslip.com/advice');
    let data = await response.json();
    return data;  
}

async function newAd(event){
    let x = await starter()
    document.getElementById('adviceNum').innerHTML = x.slip.id
    document.getElementById('adviceText').innerHTML = '"' + x.slip.advice + '"'
}
