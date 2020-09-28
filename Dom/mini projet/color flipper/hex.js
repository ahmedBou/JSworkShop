const btn = document.querySelector('.btn');
const mainColor = document.querySelector('.mainContent'); 
const result = document.querySelector('.result');
const color = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

  
// console.log(ran);
btn.addEventListener('click', ()=>{
    hex = "#";
    for(let i=0; i<6; i++){
        hex += color[getRandomNumber()];
    }

    mainColor.style = `background-color: ${hex};`
    result.innerHTML = hex;
})

function getRandomNumber() {
    return Math.floor(Math.random() * color.length);
  }