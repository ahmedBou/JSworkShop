const closeBtn = document.querySelector('.close-btn');
const togleBtn = document.querySelector('.sidebar-toggle');
const showSide = document.querySelector('.sidebar');

togleBtn.addEventListener('click', function(){
    console.log("hello");
    showSide.classList.toggle('show-sidebar');
})
closeBtn.addEventListener('click', function(){
    console.log("hello");
    showSide.classList.remove('show-sidebar')
})

