'use strict';

//wait for document to load
$(document).ready(function() {

	var canvas = $('#canvas')[0]; //get the canvas HTML element via jQuery
	var brush = canvas.getContext('2d');

    brush.fillStyle = "#39275B";
    // brush.fillRect(20,100,100,200);
    // brush.strokeStyle = "#C79900";
    // brush.strokeRect(20,100,100,200);

	// brush.beginPath();
 //    brush.moveTo(200,200);
 //    brush.lineTo(400,300);
 //    brush.lineTo(200,300);
 //    brush.closePath();

 //    brush.fill();

 //    brush.beginPath();
 //    brush.arc(300,250,25,0,2*Math.PI);
 //    brush.stroke();
    //respond to mouse clicks in the canvas
    $('#canvas').click(function(event){
        //get location information from event
        var x = event.pageX - $('#canvas').offset().left;
        var y = event.pageY - $('#canvas').offset().top;
        console.log(event);

        brush.beginPath();
        brush.arc(ball.x,ball.y,5,0,2*Math.PI);
        brush.fill();
    });
    var rect = {
        x: 20,
        y: 0,
        width: 20,
        height: 70
    };
    var ball = {
        x: 300,
        y: 240,
        radius: 15,
    }
    var render = function() {
        //erase the e tire canvas
        brush.clearRect(0, 0, canvas.width, canvas.height);
        brush.fillStyle = 'gold';
        brush.beginPath();
        brush.arc(ball.x,ball.y, ball.radius, 0, 2*Math.PI);
        brush.fill();

        //code to draw the model.variables

    };

    render(); //call to re-create the drawing as needed!

    setInterval(function() {
        if (ball.x + 2*ball.radius > canvas.width) {
            ball.x += -3;
        } else {
        render();
        ball.x += 3;
        render();
        }
    }, 20);

    //respond to key pressed down in the *document*
    $(document).keydown(function(event){

       //check which key (keycode) is pressed
       if(event.which == 37) { //left
          //respond to key
          rect.x -=5;  
       }
       if(event.which == 38) { //left
          //respond to key
          rect.y -=5;  
       }
       if(event.which == 40) { //left
          //respond to key
          rect.y +=5;  
       }
       if(event.which == 39) { //left
          //respond to key
          rect.x +=5;  
       }
       render();
       brush.fillRect(rect.x,rect.y,rect.width,rect.height);
    });





});

