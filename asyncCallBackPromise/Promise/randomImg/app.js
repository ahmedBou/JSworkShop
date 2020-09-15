// callbacks, promises, async/await
// PROMISES - Pending, Resolved, Rejected
// then catch - pass another callback
const heading1 = document.querySelector('.one');
const heading2 = document.querySelector('.two');
const heading3 = document.querySelector('.three');
const image = document.querySelector(".img-container")
url ="https://source.unsplash.com/random";

const btn = document.querySelector('.btn');

btn.addEventListener('click', () => {
  // console.log(loadImage(url));
  loadImage(url)
    .then((data) => image.appendChild(data))
    .catch((err)=> console.log(err));
});

function loadImage(url){
  return new Promise((resolve, reject)=>{
    let img = new Image();
    img.addEventListener('load', () => {
      resolve(img)
    }); 
    img.addEventListener('error', ()=>{
      reject(new Error(` this image may not be available ${url}`));
    });
    img.src= url;
  })

}