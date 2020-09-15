// callbacks, promises, async/await
const heading1 = document.querySelector('.o');
const heading2 = document.querySelector('.two');
const heading3 = document.querySelector('.three');

const btn = document.querySelector('.btn');

// btn.addEventListener('click', () => {
//   setTimeout(() => {
//     heading1.style.color = 'red';
//     setTimeout(() => {
//       heading2.style.color = 'green';
//       setTimeout(() => {
//         heading3.style.color = 'blue';
//       }, 1000);
//     }, 2000);
//   }, 1000);

//   //
// });
// console.log("im second");

btn.addEventListener('click', ()=>{
  changeColor(1000, heading1, 'red')
    .then(()=>{changeColor(2000, heading2, 'green')})
    .then(()=>{changeColor(1000, heading3, 'blue')})
    .catch((err)=>{console.log(err);})
});

function changeColor(time, element, color){
  return new Promise((resolve, reject)=>{
    if(element){
      setTimeout(()=>{
        element.style.color = color;
        resolve();
      }, time)

    }else{
      reject(new Error(` i dont have such color ${element}`))
    }
  })
}





