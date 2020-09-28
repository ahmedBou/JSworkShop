

  const btn = document.querySelector('.btn');
  const mainColor = document.querySelector('.mainContent'); 
  const result = document.querySelector('.result');
  
  const color = ["green", "red", "rgba(133,122,200)", "#f15025"];
  
    
  // console.log(ran);
  btn.addEventListener('click', ()=>{
      const hex = color[getRandomNumber()];
  
      mainColor.style = `background-color: ${hex};`
      result.innerHTML = hex;
  })
  
  function getRandomNumber() {
      return Math.floor(Math.random() * color.length);
    }