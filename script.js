//start page, change years

window.addEventListener('load',startPage); 
function startPage() {
    let years = diff_years(new Date, new Date(1987, 2, 6))
    document.getElementById('age').innerText = years;
   addEventListeners();

}
function diff_years(dt2, dt1) {
    let diff = (dt2.getTime() - dt1.getTime()) / 1000;
    diff /= (60 * 60 * 24);
    return Math.abs(Math.round(diff / 365.25)) - 1;
};

function addEventListeners(){
    document.getElementById('infoButton').addEventListener('click' , testLog);

}

function testLog(){
    // let infoText = document.getElementById('textInfo')
    document.getElementById("textInfo").classList.toggle("none-display");
//    infoText.classList.remove('diplsay')
//     // infoText.classList.add('display')
//     console.log('ejrfernfe')
}