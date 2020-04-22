var n=6;
var modes=document.querySelectorAll(".mode");
var colors = generateRandomColors(n);
var sq=document.getElementsByClassName("square");
var pickedColor=pickColor();
var colorDisplay=document.getElementById("color");
var messageDisplay=document.querySelector("#message");
var newColors=document.querySelector("#newcolors");
var h1=document.querySelector("h1");

for(var i=0;i<modes.length;i++)
{
	modes[i].addEventListener("click",function(){
		modes[0].classList.remove("selected");
		modes[1].classList.remove("selected");
		this.classList.add("selected");
		this.textContent==="Easy"?n=3:n=6;
		reset();
	});
}


colorDisplay.textContent=pickedColor;

newColors.addEventListener("click",function(){
	reset();
})

for(var i=0;i<sq.length;i++)
{
	sq[i].style.backgroundColor=colors[i];
	sq[i].addEventListener("click",function(){
		var clickedColor=this.style.backgroundColor;
		if(clickedColor===pickedColor)
		{
			messageDisplay.textContent="Correct!";
			changecolor(clickedColor);
			h1.style.backgroundColor=clickedColor;
			newColors.textContent="Play Again?";
		}
		else
		{
			this.style.backgroundColor="#232323";
			messageDisplay.textContent="Try Again";
		}
	})
}

function reset()
{
    colors = generateRandomColors(n);
	pickedColor=pickColor();
	colorDisplay.textContent=pickedColor;
	for(var i=0;i<sq.length;i++)
	{
		if(colors[i])
		{
			sq[i].style.display="block";
		    sq[i].style.backgroundColor=colors[i];
		}
		else
		{
			sq[i].style.display="none";
		}
	}
	messageDisplay.textContent="";
	h1.style.backgroundColor="steelblue";
	newColors.textContent="New Colors";	
}

function generateRandomColors(num)
{
	var arr=[];
	for(var i=0;i<num;i++)
	{
		arr.push(randomColors());
	}
	return arr;
}

function pickColor()
{
	var random=Math.floor(Math.random()*colors.length);
	return colors[random];
}

function changecolor(color)
{
	for(var i=0;i<n;i++)
	{
		sq[i].style.backgroundColor=color;
	}
}

function randomColors()
{
	var r=Math.floor(Math.random()*256);
	var g=Math.floor(Math.random()*256);
	var b=Math.floor(Math.random()*256);
	return "rgb("+r+", "+g+", "+b+")";
}