window.onload=start;

function start()
{
	// Use the "Canvas" div for drawing s
	var canvas = document.getElementById("canvas");    
	var context = canvas.getContext("2d");

  //Draw the initial triangle
	var a = [100,1];
	var b = [1,199];
	var c = [199,199];
	var d = [a[0],a[1]]
	context.moveTo(100,1);
	context.lineTo(1,199);
	context.lineTo(199,199);
	context.lineTo(100,1);
  context.strokeStyle = "#ffff";
  context.stroke();

	//Calculate a random point within the triangle	 
	var t1 = Math.random();
	var t2 = Math.random();
	if ((t1+t2) > 1)
	{
		t1 = 1- t1;
		t2 = 1- t2;
	}
	t3 = 1 - (t1+t2);
	var e = [0,0];
	e[0] = (t1 * a[0]) + (t2 * b[0]) + (t3 * c[0]); 
	e[1] = (t1 * a[1]) + (t2 * b[1]) + (t3 * c[1]);
	
	//Begin the game	
	for(var x=0; x < 20000; x++)
	{	
		//Plot the point
		context.fillRect(e[0],e[1],1,1);		
		
		//Roll the dice to choose a random corner
		var chosenCorner = [0,0];
		switch(Math.floor(Math.random() * 3))
		{
			case 0:
				chosenCorner = a;
				break;		
			case 1:
				chosenCorner = b;
				break;
			case 2:
				chosenCorner = c;
				break;
		}
		
		
		//set next point to be middle of line
		e[0] = (e[0] + chosenCorner[0]) / 2;
		e[1] = (e[1] + chosenCorner[1]) / 2;
		//jg.paint(); 
	}
}

