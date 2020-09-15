const colors = [
    'yellow',
    'green',
    'purple',
    'red',
    'blue',
    'indigo',
    'violet',
    'orange'
];

const container = document.querySelector("#boxes");
// But what is the magical keyword I can use to reference the item that has been clicked it. Is this the keyword this.
// This is referring to the individual div that was clicked on. Remember that this, instead of a method which is added on to an object,this will refer to that object 

const test = document.querySelector('h1');
test.addEventListener("mouseover", function(){
    console.log(this.innerText);
});

const changeColor = function(){
    console.log(this);
    console.log(this.style.backgroundColor);
    const h1 = document.querySelector('h1');
    h1.style.color = this.style.backgroundColor;
}

//I have an array of colors ,I want to loop over all of these colors and create a div on the page with that background color 

for(let color of colors){
    const box= document.createElement('div');
    box.style.backgroundColor= color;
    box.classList.add("box");
    container.appendChild(box);
    box.addEventListener('click', changeColor);
}
