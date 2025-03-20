

console.log("ok")
const allSideMenu = document.querySelectorAll('#sidebar .side-menu.top li a');

allSideMenu.forEach(item=> {
	const li = item.parentElement;

	item.addEventListener('click', function () {
		allSideMenu.forEach(i=> {
			i.parentElement.classList.remove('active');
		})
		li.classList.add('active');
	})
});




// TOGGLE SIDEBAR
const menuBar = document.querySelector('#content nav .bx.bx-menu');
const sidebar = document.getElementById('sidebar');

menuBar.addEventListener('click', function () {
	sidebar.classList.toggle('hide');
})







const searchButton = document.querySelector('#content nav form .form-input button');
const searchButtonIcon = document.querySelector('#content nav form .form-input button .bx');
const searchForm = document.querySelector('#content nav form');

searchButton.addEventListener('click', function (e) {
	if(window.innerWidth < 576) {
		e.preventDefault();
		searchForm.classList.toggle('show');
		if(searchForm.classList.contains('show')) {
			searchButtonIcon.classList.replace('bx-search', 'bx-x');
		} else {
			searchButtonIcon.classList.replace('bx-x', 'bx-search');
		}
	}
})





if(window.innerWidth < 768) {
	sidebar.classList.add('hide');
} else if(window.innerWidth > 576) {
	searchButtonIcon.classList.replace('bx-x', 'bx-search');
	searchForm.classList.remove('show');
}


window.addEventListener('resize', function () {
	if(this.innerWidth > 576) {
		searchButtonIcon.classList.replace('bx-x', 'bx-search');
		searchForm.classList.remove('show');
	}
})



const switchMode = document.getElementById('switch-mode');

switchMode.addEventListener('change', function () {
	if(this.checked) {
		document.body.classList.add('dark');
	} else {
		document.body.classList.remove('dark');
	}
})
// Your web app's Firebase configuration
var input1;
let Rack1 = "product6"
let Rack_1 = "Product6"
let Rack2 = "product2"
let Rack_2 = "Product2"
let Rack3 = "product3"
let Rack_3 = "Product3"
let Rack4 = "product4"
let Rack_4 = "Product4"
let Rack5 = "product5"
let Rack_5 = "Product5"
console.log(input1)
document.getElementById("btn").onclick = function(){
	input1 = document.getElementById("input1").value;
	console.log(input1)
	if (input1 == Rack1 ){
		alert("Its in rack 1")
	}
	else if (input1 == Rack_1){
		alert("Its in rack 1")
	}
	else if (input1 == Rack2 ){
		alert("Its in rack 2")
	}
	else if (input1 == Rack_2){
		alert("Its in rack 2")
	}
	else if (input1 == Rack3 ){
		alert("Its in rack 3")
	}
	else if (input1 == Rack_3){
		alert("Its in rack 3")
	}
	else if (input1 == Rack4 ){
		alert("Its in rack 4")
	}
	else if (input1 == Rack_4){
		alert("Its in rack 4")
	}
	else if (input1 == Rack5 ){
		alert("Its in rack 5")
	}
	else if (input1 == Rack_5){
		alert("Its in rack 5")
	}
	else{
		alert("Not found")
	}
}
JSC.Chart('chartDiv', {
  
	   type: 'vertical column',
	   series: [
	      {
	         points: [
	          {x: 'Product1', y: 50},
	            {x: 'Product2', y: 42},
	           {x: 'Product3', y: 50},
	            {x: 'Product4', y: 42},
	          {x: 'Product5', y: 50},
			 
	        ]
	      }
	   ]
	 });