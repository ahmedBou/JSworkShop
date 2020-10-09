//using selectors inside the element
// traversing the dom


const questBtn = document.querySelectorAll('.question-btn');
const questTxt = document.querySelector('.question-text');

questBtn.forEach(btn => {
    btn.addEventListener('click', e =>{
        console.log(e.currentTarget.parentElement.parentElement);
        e.currentTarget.parentElement.parentElement.classList.toggle('show-text');
    });
});
