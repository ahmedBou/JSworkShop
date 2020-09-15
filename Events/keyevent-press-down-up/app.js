const keyp = document.querySelector(".username");
// e: contain information about wich key was pressed
keyp.addEventListener("keypress", function(e){
    console.log("keypress");
})

keyp.addEventListener('keyup', function(e){
    console.dir(e);
    console.dir(e.timeStamp);
    console.log("keyup");
})
keyp.addEventListener('keydown', function(e){
    console.log("keydown");
})

const itemUl = document.querySelector(".itemAdded");
const addItems = document.querySelector(".addItems");

addItems.addEventListener('keypress', function(e){
    // const input = document.getElementsByClassName(".addItems").value;
    // console.log(input);
    console.log(e);
    if(e.key ==="Enter"){
        // add items to list
        // const item = document.querySelector(".addItems").value;
        if(!this.value) return;
        const item = this.value;
        // console.log(item);
        const creatLi = document.createElement("li");
        creatLi.innerText = item;
        itemUl.appendChild(creatLi);
        this.value = "";
    }
})