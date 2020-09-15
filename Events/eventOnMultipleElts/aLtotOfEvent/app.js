const oneElement = document.getElementById("one");
const twoElement = document.getElementById("two");
const threeElement = document.getElementById("three");
const fourElement = document.getElementById("for");
const fiveElement = document.getElementById("five");


oneElement.addEventListener("click", doSomething, false);
twoElement.addEventListener("click", doSomething, false);
threeElement.addEventListener("click", doSomething, false);
fourElement.addEventListener("click", doSomething, false);
fiveElement.addEventListener("click", doSomething, false);

function doSomething(e){
    var targetItem = e.target.id;
    var currentTarget = e.currentTarget.id;
    console.log(currentTarget);
    alert("target " + targetItem );
}