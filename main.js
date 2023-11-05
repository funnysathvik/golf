
// Create canvas variable
var canvas = new fabric.Canvas('myCanvas');
//Set initial positions for ball and hole images.
ball_y=0;
ball_x=0;
hole_y=400;
hole_x=800;
block_image_width = 5;
block_image_height = 5;

function load_img(){
		fabric.Image.fromURL("golf-h1.png", function(Img) {
		hole_object = Img;
	
		hole_object.scaleToWidth(50);
		player_object.scaleToHeight(50);
		hole_object.set({
		top:hole_y,
		left:hole_x
		});
		canvas.add(holer_obj);
	
		});	new_image();
}

function new_image()
{
		fabric.Image.fromURL("ball.png", function(Img) {
		ball_obj = Img;
	
		ball_obj.scaleToWidth(50);
		ball_obj.scaleToHeight(50);
		ball_obj.set({
		top:ball_y,
		left:ball_x
		});
		canvas.add(ball_obj);
	
		});
	}
window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
if((ball_x==hole_x)&&(ball_y=hole_y)){
	canvas.remove(ball_obj);
	document.getElementById("hd3").innerHTML="you have hit hte goal";
	document.getElementById("myCanvas").style.borderColors="red"
}
	
	else{
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
	}
	
	function up()
	{
		if (player_y>=0){
			ball_y=ball_y-block_image_height;
			console.log("block image height=" +block_image_height);
			console.log("when up arrow key is pressed, x = " +player_x+"and y = " +player_y);
			canvas.remove(ball_obj);
			player_update();
		}	}

	function down()
	{
		if (player_y<=450){
			ball_y=ball_y+block_image_height;
			console.log("block image height=" +block_image_height);
			console.log("when down arrow key is pressed, x = " +player_x+"and y = " +player_y);
			canvas.remove(ball_obj);
			player_update();
		}	}

	function left()
	{
		if(ball_x >5)
		{
			ball_x=ball_x-block_image_width;
			console.log("block image width= " +block_image_width);
			console.log("when left arrow key is pressed, x = " +player_x+"and y is" +player_y);
			canvas.remove(ball_obj);
			player_update();
		}		}
	}

	function right()
	{
		if(ball_x <=1050)
		{
				ball_x=ball_x+block_image_width;
				console.log("block image width=" +block_image_width);
				console.log("when ridght arrow key is pressed, x = "+player_x+"and y = " +player_y);
				canvas.remove(ball_obj);
				player_update();
			}		}
	}
	


