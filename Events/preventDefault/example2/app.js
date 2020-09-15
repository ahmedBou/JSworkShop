const form = document.querySelector('#signup-form');
const creditCard= document.querySelector('#cc')
const check= document.querySelector('#check')
const vegie= document.querySelector('#veggie')
form.addEventListener('submit', function(e){
    console.log(e);
    console.log("submit the form");
    console.log("cc", creditCard.value);
    console.log("check", check.value);
    console.log("vegie", vegie.value);
    e.preventDefault();
} )