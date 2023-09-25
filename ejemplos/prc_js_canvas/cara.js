window.onload = function(){
	var c=document.getElementById("canvas");
		var cxt=c.getContext("2d");
		
		cxt.fillStyle="blue";
		cxt.beginPath();
		cxt.arc(60,60,50,0,Math.PI*2,true);
		cxt.closePath;
		cxt.fill();
		
		cxt.fillStyle="white";
		cxt.beginPath();
		cxt.arc(60,60,30,0.75*Math.PI,Math.PI*2,true);
		cxt.closePath;
		cxt.fill();
		
		cxt.fillStyle="white";
		cxt.beginPath();
		cxt.arc(70,40,10,Math.PI,Math.PI*2,false);
		cxt.closePath;
		cxt.fill();
		
		cxt.fillStyle="white";
		cxt.beginPath();
		cxt.arc(40,50,10,1.8*Math.PI,0.8*Math.PI,true);
		cxt.closePath;
		cxt.fill();
}