// classList - shows/gets all classes
// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggles class


const toggleBtn = document.querySelector(".nav-toggle");
const nav = document.querySelector('.links');

toggleBtn.addEventListener('click', ()=>{
    // if(nav.classList.contains('show-links')){
    //     nav.classList.remove('show-links')
    // }else{
    //     nav.classList.add('show-links')
    // }
    nav.classList.toggle('show-links');
})
