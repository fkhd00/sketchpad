
let y=10;

let gridbox=document.getElementById("gridbox");
let a=[];
let b=[];

let x=document.getElementById("gridsize");
x.addEventListener("click",function(e){
	cleargrid(y);
	let z=prompt("Enter the Size:");
	creategrid(z);
	y=z;
	gridbox.style.cssText="grid-template-columns: repeat("+z+", 1fr);   grid-template-rows: repeat("+z+", 1fr);";

});


creategrid(y);
function creategrid(m){
	for(i=0;i<m*m;i++){
	a[i]=document.createElement("div");
	a[i].id="id"+i;
	a[i].classList.add("elements");
	gridbox.appendChild(a[i]);
	a[i].addEventListener("mouseover",hover);
	}
}

function cleargrid(n){
	for(i=0;i<n*n;i++){
	gridbox.removeChild(a[i]);
}
}

function hover(e){
	let r1=Math.floor(Math.random()*255);
	let g1=Math.floor(Math.random()*255);
	let b1=Math.floor(Math.random()*255);
	e.target.style.backgroundColor="rgb("+r1+","+g1+","+b1+")";
}
function reset(){
let r=document.querySelector('#gridbox');
let r2=r.querySelectorAll('div');
r2.forEach(e => e.style.backgroundColor="white");
}
const re = document.getElementById("reset");
re.addEventListener("click",reset);