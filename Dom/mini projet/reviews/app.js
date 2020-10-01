// local reviews data
const reviews = [
    {
      id: 1,
      name: "susan smith",
      job: "web developer",
      img:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
      text:
        "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
    },
    {
      id: 2,
      name: "anna johnson",
      job: "web designer",
      img:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
      text:
        "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
    },
    {
      id: 3,
      name: "peter jones",
      job: "intern",
      img:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
      text:
        "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
    },
    {
      id: 4,
      name: "bill anderson",
      job: "the boss",
      img:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
      text:
        "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
    },
  ];
// console.log(reviews.length);

const next = document.querySelector('.next');
console.log(next);
const prev = document.querySelector('.prev');
const randomBtn = document.querySelector('.randomBtn');
const name = document.querySelector('.name');
// console.log(name);
const profession = document.querySelector('.profession');
const review = document.querySelector('.review');
const img = document.querySelector('img');


let currentItem = 0
window.addEventListener('DOMContentLoaded', function(){
    const item = reviews[currentItem];
    name.innerText = item.name;
    profession.innerText = item.job;
    review.innerText = item.text;
    img.src = item.img;
});

// get the person of his article
function showPerson(person){
    const item = reviews[person];
    name.innerText = item.name;
    profession.innerText = item.job;
    review.innerText = item.text;
    img.src = item.img;
}

next.addEventListener('click', ()=>{
    // console.log(currentItem);
    // console.log(reviews.length -1);
    currentItem++;

    if(currentItem > reviews.length-1){
        currentItem=0;
    }
    showPerson(currentItem);
})

prev.addEventListener('click', ()=>{
    console.log(currentItem);
    console.log(reviews.length - 3);
    currentItem--;
    if(currentItem < 0){
        currentItem = reviews.length -1;
    }
    showPerson(currentItem);
})

randomBtn.addEventListener("click", ()=>{
    let randPersn = Math.floor(Math.random() * reviews.length); 
    showPerson(randPersn);
})
















//   /Another solution/
// var slideIndex = 1;
// afficher2(slideIndex);

// function Incrementer(n) {
//   slideIndex = slideIndex + n;
//   afficher2(slideIndex);
    
//   }
//   function afficher2(n){
//   if (n > reviews.length) {slideIndex = 1}
//   else if (n < 1) {slideIndex = reviews.length}
//   name.innerText = reviews[slideIndex -1].name;
//   profession.innerText = reviews[slideIndex - 1].job;
//   img.src = reviews[slideIndex - 1].img;
//   review.innerText = reviews[slideIndex - 1].text;
//   }