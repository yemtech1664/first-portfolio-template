let openIcon = document.querySelector(".menuIcon");
let menuLink = document.querySelector(".nav-menu");
let closeIcon = document.querySelector(".close-icon")
openIcon.addEventListener("click", ()=>{
	menuLink.classList.add("open");
	
})

closeIcon.addEventListener("click", ()=>{
	menuLink.classList.remove("open");
})



let nav = document.getElementById("nav-tag");
const navHeight = nav.getBoundingClientRect().height;
let windowHeight = window.pageYOffset;
let call = document.querySelector(".call");
let phone_num = document.querySelector(".phone-num");

window.addEventListener("scroll", function(){
	let nav = document.getElementById("nav-tag");
	const navHeight = nav.getBoundingClientRect().height;
	let windowHeight = window.pageYOffset;
	let checkNav = nav.classList.contains("nav-class"); 
	console.log(windowHeight)
	if(windowHeight > navHeight){
		nav.classList.add("nav-class");
		//call.classList.add("call-color")
		//console.log("hi")
	}else{
		//console.log("remove")
		nav.classList.remove("nav-class")
		//call.classList.remove("call-color")
	}

	if(checkNav){

	}



})


//document.getElementsByTagName('body').addEventListener("scroll", nav)

