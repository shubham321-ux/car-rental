var tl=gsap.timeline();

tl.from("#nav img,#nav h3",{
	y:-70,
	duration:0.6,
	opacity:0,
	stagger:0.1,
})
tl.from("#main h1,#main p",{
	y:-70,
	duration:1,
	stagger:0.2,
	opacity:0,
})
tl.from("#main select,#main button",{
	scale:0,
	duration:0.3,
	opacity:0,
})
gsap.from("#main2 #text h1 ,#text p",{
	scale:0,
	duration:1,
	scrollTrigger:{
		trigger:"#main2 #text h1 ,#text p",
		scroller:"body",
		markers:false,
		scrub:1,
		start:"top 90%",
		end:"top 30%",
	}
})
gsap.from("#main2 #box-1,#box-2,#box-3,#main2 #box2-1,#box2-2,#box2-3",{
	y:100,
	duration:3,
	opacity:0,
	stagger:1,
	scrollTrigger:{
		trigger:"#main2 #box-1,#box-2,#box-3,#main2 #box2-1,#box2-2,#box2-3",
		scroller:"body",
		markers:false,
		scrub:1,
		start:"top 80%",
		end:"top 40%",
	}
})
gsap.from("#brand3 #box3-1,#box3-2,#box3-3",{
	y:70,
	duration:1,
	opacity:0,
	stagger:1,
	scrollTrigger:{
		trigger:"#brand3 #box3-1,#box3-2,#box3-3",
		scroller:"body",
		scrub:1,
		markers:false,
		start:"top 95%",
		end:"top 60%",
	}
})
// // gsap.from("#main3 #brand4 #box4",{
// // 	scale:0,
// // 	duration:1,
// // 	opacity:0,
// // 	scrollTrigger:{
// // 		trigger:"#main3 #brand4 #box4",
// // 		scroller:"body",
// // 		markers:false,
// // 		start:"top 30%",
// // 		scrub:1,
// // 	}
// });

function search(){
var select1 = document.getElementById("slt");
var select2 = document.getElementById("slt2");
var select3 = document.getElementById("slt3");

var selectedOption1 = select1.options[select1.selectedIndex].text;
var selectedOption2 = select2.options[select2.selectedIndex].text;
var selectedOption3 = select3.options[select3.selectedIndex].text;


if(selectedOption1 ==="MAHINDRA" && selectedOption2 ==="SUV" && selectedOption3==="Prize Low to High" || 
selectedOption1 ==="MAHINDRA" && selectedOption2 ==="SEDAN" && selectedOption3==="Prize Low to High" ||
selectedOption1 ==="MAHINDRA" && selectedOption2 ==="OFROAD" && selectedOption3==="Prize Low to High" ||
selectedOption1 ==="MAHINDRA" && selectedOption2 ==="OFROAD" && selectedOption3==="Prize High to Low"){
			window.open("./mahindra.html","_self")
	}

 if(selectedOption1 ==="MARUTI SUZIKI" && selectedOption2 ==="SUV" && selectedOption3==="Prize Low to High" || 
selectedOption1 ==="MARUTI SUZUKI" && selectedOption2 ==="SEDAN" && selectedOption3==="Prize Low to High" ||
selectedOption1 ==="MARUTI SUZUKI" && selectedOption2 ==="OFROAD" && selectedOption3==="Prize Low to High" ||
selectedOption1 ==="MARUTI SUZUKI" && selectedOption2 ==="OFROAD" && selectedOption3==="Prize High to Low"){
	window.open("./maruti.html","_self")


}
if(selectedOption1 ==="TATA" && selectedOption2 ==="SUV" && selectedOption3==="Prize Low to High" || 
selectedOption1 ==="TATA" && selectedOption2 ==="SEDAN" && selectedOption3==="Prize Low to High" ||
selectedOption1 ==="TATA" && selectedOption2 ==="OFROAD" && selectedOption3==="Prize Low to High" ||
selectedOption1 ==="TATA" && selectedOption2 ==="OFROAD" && selectedOption3==="Prize High to Low"){
    window.open("./tata.html","_self")
}
if(selectedOption1 ==="TOYOTA" && selectedOption2 ==="SUV" && selectedOption3==="Prize Low to High" || 
selectedOption1 ==="TOYOTA" && selectedOption2 ==="SEDAN" && selectedOption3==="Prize Low to High" ||
selectedOption1 ==="TOYOTA" && selectedOption2 ==="OFROAD" && selectedOption3==="Prize Low to High" ||
selectedOption1 ==="TOYOTA" && selectedOption2 ==="OFROAD" && selectedOption3==="Prize High to Low"){
    window.open("./toyota.html","_self")
}
if(selectedOption1 ==="HONDA" && selectedOption2 ==="SUV" && selectedOption3==="Prize Low to High" || 
selectedOption1 ==="HONDA" && selectedOption2 ==="SEDAN" && selectedOption3==="Prize Low to High" ||
selectedOption1 ==="HONDA" && selectedOption2 ==="OFROAD" && selectedOption3==="Prize Low to High" ||
selectedOption1 ==="HONDA" && selectedOption2 ==="OFROAD" && selectedOption3==="Prize High to Low"){
    window.open("./honda.html","_self")
}
if(selectedOption1 ==="KIA" && selectedOption2 ==="SUV" && selectedOption3==="Prize Low to High" || 
selectedOption1 ==="KIA" && selectedOption2 ==="SEDAN" && selectedOption3==="Prize Low to High" ||
selectedOption1 ==="KIA" && selectedOption2 ==="OFROAD" && selectedOption3==="Prize Low to High" ||
selectedOption1 ==="KIA" && selectedOption2 ==="OFROAD" && selectedOption3==="Prize High to Low"){
    window.open("./kia.html","_self")
}







}



