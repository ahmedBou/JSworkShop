const btn = document.querySelector("button");
let btnMargin;
btn.addEventListener('mouseover', function(){
    // alert('hello');
    const btnMarginHeight = Math.floor(Math.random() * window.innerHeight);
    const btnMarginWidth = Math.floor(Math.random() * window.innerWidth);
    // btn.style.setProperty('margin',btnMarginHeight + 'px');
    btn.style.top = `${btnMarginHeight}px`;
    btn.style.left = `${btnMarginWidth}px`;
    btn.style.fontSize = `${btnMarginHeight}px`;
})

btn.addEventListener('click', function(){
    btn.innerText = "You did It!";
    document.body.style.background ="red";
})



