const btn = document.querySelector("a");
btn.addEventListener("click", ()=>{
        document.querySelector("form").style = "display: block";
    });

btn.addEventListener("mouseout", ()=>{
    document.querySelector("form").style = "display: none";
});