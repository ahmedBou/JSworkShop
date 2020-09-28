const canvas = document.querySelector("canvas");
const context = canvas.getContext('2d');
console.log(canvas);
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


let player = {
    x:500,
    y:0,
    dx: 0,
    dy: 3,
    speed: 0.02,
    width: 100,
    height: 100,
    color: "orange",

    render: function(){
        context.fillStyle = player.color;
        context.fillRect(player.x, player.y, player.width, player.height);
        console.log(player.y);
    }, 
    moveY: function(){
        this.speed /= this.dy;
        player.dy = this.speed;
        player.y += this.dy ;
    }
}



setInterval(()=>{
    context.fillStyle= "white";
    context.fillRect(0, 0, canvas.width, canvas.height);

    player.moveY();
    player.render();
}, 60/1000)










