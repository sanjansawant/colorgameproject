alert("connected");
var numSquares=6;
var pickedColor;
var colors=[];

var list=document.querySelectorAll(".square");
var message=document.querySelector("#message");

var listing=document.querySelector("h1 > span");
var modeBtn=document.querySelectorAll(".mode");

init();

function init(){

	setUpModeButtons();
	setUpSquares();
	resetNew();
}


function setUpSquares(){

	for(var i=0;i<list.length;i++){

	list[i].style.backgroundColor=colors[i];

	list[i].addEventListener("click",function(){
	
		if(this.style.backgroundColor===pickedColor){
			document.querySelector("h1").style.backgroundColor=pickedColor;
			message.textContent="Correct";
			changeColor(pickedColor);
			resetBtn.textContent="Play Again?";
			


		}else{
			
			this.style.backgroundColor="#232323";
			message.textContent="Try again";
			

		}


	});
}
}



function setUpModeButtons(){

for(var i=0;i<modeBtn.length;i++){


	modeBtn[i].addEventListener("click",function(){
		modeBtn[0].classList.remove("selected");
		modeBtn[1].classList.remove("selected");
		this.classList.add("selected");
		if(this.textContent==="Easy"){
			numSquares=3;
		}else{
			numSquares=6;
		}

		resetNew();


	});

}

}




listing.textContent=pickedColor;



var resetBtn=document.querySelector("#reset");
reset();


function resetNew(){
	document.querySelector("h1").style.backgroundColor="steelblue";
	colors=generateRandomColors(numSquares);
 		pickedColor=pickColor();
 		listing.textContent=pickedColor;


 		for(var i=0;i<list.length;i++){
				if(colors[i]){
				list[i].style.display="block";	
 				list[i].style.backgroundColor=colors[i];

 				}else{
 				list[i].style.display="none";
				}

 		}


}


// easyBtn.addEventListener("click",function(){
// 		document.querySelector("h1").style.backgroundColor="steelblue";
// 		easyBtn.classList.add("selected");
// 		hardBtn.classList.remove("selected");
// 		numSquares=3;
// 		colors=generateRandomColors(numSquares);
// 		pickedColor=pickColor();
// 		listing.textContent=pickedColor;
// 		for(var i=0;i<list.length;i++){
// 			if(colors[i]){
// 				list[i].style.backgroundColor=colors[i];


// 			}else{
// 				list[i].style.display="none";
// 			}


// 		}


// });


// hardBtn.addEventListener("click",function(){
// 		document.querySelector("h1").style.backgroundColor="steelblue";
// 		hardBtn.classList.add("selected");
// 		easyBtn.classList.remove("selected");
// 		numSquares=6;
// 		colors=generateRandomColors(numSquares);
// 		pickedColor=pickColor();
// 		listing.textContent=pickedColor;
// 		for(var i=0;i<list.length;i++){
	
// 				list[i].style.backgroundColor=colors[i];

// 				list[i].style.display="block";
		

// 		}

		
// });






function reset(){

	resetBtn.addEventListener("click",function(){
		document.querySelector("h1").style.backgroundColor="steelblue";
		colors=generateRandomColors(numSquares);
		pickedColor=pickColor();
		listing.textContent=pickedColor;
		message.textContent="";
		this.textContent="New Colors";
		a();
	});

}




function randomColor(){


	var red=Math.floor(Math.random()*256);
	var green=Math.floor(Math.random()*256);
	var blue=Math.floor(Math.random()*256);
	var string="rgb("+red+", "+green+", "+blue+")";
	return string;

}

function changeColor(color){

	for(var i=0;i<list.length;i++){

		list[i].style.backgroundColor=color;
	}

}

function pickColor(){

	var random= Math.floor(Math.random()*colors.length);
	return colors[random];
}

function generateRandomColors(num){
	var array=[];
	var string="rgb(";
	for(var i=0;i<num;i++){

		var random=randomColor();	
		array.push(random);

	}	
	return array;

}