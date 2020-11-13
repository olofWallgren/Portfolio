//start page, change years

window.onload = startPage;
function startPage(){
    let years = diff_years(new Date, new Date(1987,2,6))
   
    document.getElementById('age').innerText = years;
    startSlideshowAnimation();
}
function diff_years(dt2, dt1) 
{
 let diff =(dt2.getTime() - dt1.getTime()) / 1000;
  diff /= (60 * 60 * 24);
 return Math.abs(Math.round(diff/365.25))-1;
};
