let count = 0;
const btn = document.querySelectorAll('.btn');
console.log(btn);
const result = document.getElementById('result');


btn.forEach(item => {
    console.log(item);
    item.addEventListener('click', ()=>{
        if(item.classList.contains('decrease')){
            count--;
            result.textContent = count;
        }
        else if(item.classList.contains('increase')){
            count++;
            result.textContent = count;

        }
        else{
            count = 0;
            result.textContent = count;

        }
        if(count>0){
            result.style.color ="green";
        }
        if(count <0){
            result.style.color ="red";
        }
        
        if(count == 0){
            result.style.color ="black";
        }
    })
});


// decrease.addEventListener('click', ()=>{
//     // console.log("hello");
//     result.innerHTML = minus();
//     if(parseInt(result.innerText) < 0){
//         result.style.color = "red";
//         console.log("hey");
//     }
// });
// increase.addEventListener('click', ()=>{
//     result.innerHTML = plus();
//     if(parseInt(result.innerText) > 0){
//         result.style.color = "green";
//         console.log("hey");
//     }

// })
// reset.addEventListener('click', ()=>{
//     result.innerHTML = zero();
//     if(parseInt(result.innerText) === 0){
//         result.style.color = "black";
//         console.log("hey");
//     }

// })

// function minus(){
//     return count -=1;
// }

// function plus(){
//     return count +=1;
// }

// function zero(){
//     return count = 0;
// }
