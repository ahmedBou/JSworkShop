document.getElementById("play").addEventListener("click", function(e){
    // let guess = Math.floor(Math.random(1)*10);
    let guess = 5;
    console.log(guess);
    let yrNum = document.getElementById("number").value;
    console.log(yrNum);
    if(guess === Number(yrNum)){
        document.getElementById("response").innerText= 
        "Congratulations! the number to guess was <span style='color:red'>"+ yrNum+"</span>";
        // console.log(response);
    } 
})