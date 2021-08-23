canvas=document.getElementById("mycanvas");
ctx=canvas.getContext("2d");
rover_width=100;
rover_height=90;
rover_x=10;
rover_y=10;
Background_img="mars.jpg";
rover_img="rover.png";



function add(){
    Background_imgtag=new Image();
    Background_imgtag.onload=uploadBackground;
    Background_imgtag.src=Background_img;
    rover_imgtag=new Image();
    rover_imgtag.onload=uploadrover;
    rover_imgtag.src=rover_img;
}



function uploadBackground(){
ctx.drawImage(Background_imgtag,0,0,canvas.width,canvas.height);
}


function uploadrover(){
    ctx.drawImage(rover_imgtag,rover_x,rover_y,rover_width,rover_height);
}



wendow.addEventListener("keyDown",my_keyDown);
function my_keyDown(e){
    keyPressed = e.keyCode;
     console.log(keyPressed);
      if(keyPressed == '38') { up();
         console.log("up");
        } if(keyPressed == '40') { down();
         console.log("down");
         } if(keyPressed == '37') { left();
             console.log("left"); }
             if(keyPressed == '39') { right();
             console.log("right"); }
}
