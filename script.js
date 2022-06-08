//step movement

//setup canvas and graphics conxext
let cnv = document.getElementById("mycanvas");
let ctx = cnv.getContext("2d");
cnv.width = 800;
cnv.height = 600;

//global variables
let player = {
    x: 375,
    y: 550,
    w: 50,
    h: 50,
    xSpeed: 0,
    ySpeed: 0,
    speed: 5,
}
let arrowRipre = false;
let arrowLepre = false;
let arrowUppre = false;
let arrowDopre = false;

//main program loop (60 fps)
requestAnimationFrame(loop);
function loop () {
    //lodgic

    //move player based on whats held down
    if(arrowRipre){
        player.x += player.speed;
    } else if(arrowLepre){
        player.x -= player.speed;
    }
    if(arrowUppre){
        player.y -= player.speed;
    } else if(arrowDopre){
        player.y += player.speed;
    } 


    //move by xspeed and yspeed
    player.x += player.xSpeed;
    player.y += player.ySpeed;

    
    ctx.clearRect(0, 0, cnv.width, cnv.height); //draw filled square

    ctx.fillStyle = "orange";
    ctx.fillRect(player.x, player.y, player.w, player.h);

    
    requestAnimationFrame(loop);
}

// document event stuff
document.addEventListener("keydown", keydo);
document.addEventListener("keyup", keyup);

function keydo(event){
    //Key is pressed movement
    if (!event.repeat){
        if(event.code == "ArrowRight"){
            arrowRipre = true;
        } else if(event.code == "ArrowLeft"){
            arrowLepre = true;
        } else if(event.code == "ArrowUp"){
            arrowUppre = true;

        } else if(event.code == "ArrowDown"){
            arrowDopre = true;

    }
}
    
}
function keyup(event){
    if(event.code == "ArrowRight"){
        arrowRipre = false;
    } else if(event.code == "ArrowLeft"){
        arrowLepre = false;
    } else if(event.code == "ArrowUp"){
        arrowUppre = false;

    } else if(event.code == "ArrowDown"){
        arrowDopre = false;

}
}


    //CONTINUOUS MOVEMENT
/*
///key is pressed key realeased
function keydo(event){
    //KEY PRESSED KEY REALEASED
    if (!event.repeat){
        if(event.code == "ArrowRight"){
            player.xSpeed = player.speed;
        } else if(event.code == "ArrowLeft"){
            player.xSpeed = -player.speed;
        } else if(event.code == "ArrowUp"){
            player.ySpeed = -player.speed;
        } else if(event.code == "ArrowDown"){
            player.ySpeed = player.speed;
    }
}
    
}
function keyup(event){
    if(event.code == "ArrowRight" && player.xSpeed > 0){
        player.xSpeed = 0;
    } else if(event.code == "ArrowLeft" && player.xSpeed < 0){
        player.xSpeed = 0;
    } else if(event.code == "ArrowUp" && player.ySpeed < 0){
        player.ySpeed = 0;
    } else if(event.code == "ArrowDown" && player.ySpeed > 0){
        player.ySpeed = 0;
    }
}


if(event.code == "ArrowRight"){
    player.xSpeed = player.speed;
    player.ySpeed = 0;
} else if(event.code == "ArrowLeft"){
    player.ySpeed = 0;
    player.xSpeed = -player.speed;
} else if(event.code == "ArrowUp"){
    player.xSpeed = 0;
    player.ySpeed = -player.speed;
} else if(event.code == "ArrowDown"){
    player.xSpeed = 0;
    player.ySpeed = player.speed;
}

    //STEP MOVEMENT
    //if(!event.repeat) {
        //step movement
      //  if (event.code == "ArrowRight") {
        //player.x += 50;
        //} else if (event.code == "ArrowLeft") {
        //player.x += -50;
        //} else if (event.code == "ArrowUp") {
        //player.y += -50;
        //} else if (event.code == "ArrowDown") {
        //player.y += 50;
        //}
    //}
*/
