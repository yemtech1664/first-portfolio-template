

// document.getElementsByTagName("body").addEventListener("scroll", function(){
// 	let nav = document.getElementById("nav-tag");
// 	let brand = document.querySelector(".brand");
// 	let linkNav = document.querySelector(".nav-link");
// 	let callIcon = document.getElementById("call");
// 	let phoneNumber = document.getElementById("phone-num");
// 	brand.style.color = "#000";
// 	linkNav.style.color = "#000";
// 	callIcon.style.backgroundColor = "#4da178";
// 	phoneNumber.style.color = "#4da178";
// 	phoneNumber.style.border = "think solid #4da178";
// 	nav.style.backgroundColor = "#fff";
// 	nav.style.borderRadius = "20px";
// });
let openIcon = document.querySelector(".menuIcon");
let menuLink = document.querySelector(".nav-menu");
let closeIcon = document.querySelector(".close-icon")
openIcon.addEventListener("click", ()=>{
	menuLink.classList.add("open");
	
})

closeIcon.addEventListener("click", ()=>{
	menuLink.classList.remove("open");
})


function nav(){
	let nav = document.getElementById("nav-tag");
	let brand = document.querySelector(".brand");
	let linkNav1 = document.querySelector(".nav-link1");
	let linkNav2 = document.querySelector(".nav-link2");
	let linkNav3 = document.querySelector(".nav-link3");
	let linkNav4 = document.querySelector(".nav-link4");
	let callIcon = document.getElementById("call");
	let phoneNumber = document.getElementById("phone-num");
	brand.style.color = "#000";
	linkNav1.style.color = "#000";
	linkNav2.style.color = "#000";
	linkNav3.style.color = "#000";
	linkNav4.style.color = "#000";
	callIcon.style.backgroundColor = "#4da178";
	phoneNumber.style.color = "#4da178";
	phoneNumber.style.border = "3px solid #4da178";
	nav.style.backgroundColor = "#fff";
	nav.style.borderRadius = "10px";
}

//document.getElementsByTagName('body').addEventListener("scroll", nav)

