const slides = [
	{
		"image":"./assets/images/slideshow/slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"./assets/images/slideshow/slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"./assets/images/slideshow/slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"./assets/images/slideshow/slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	},
]

const textBanner = document.querySelectorAll("#banner p, span")
const arrowLeft = document.querySelector("#banner .arrow_left")
const arrowRight = document.querySelector("#banner .arrow_right")

const imageBanner = document.querySelector("#banner .banner-img")
const bullets = document.querySelectorAll("#banner .dots .dot")
let index = 0
let indexIntervalBullets = 0
bullets[0].classList.add("dot_selected")


function resetIndex(index) {
	if (index < 0) {
		index = 3
	}
	else if (index > 3) {
		index = 0
	}
	return index
}

function iterationArrowImg() {
	index = resetIndex(index)
	imageBanner.src = slides[index].image
	textBanner[0].innerHTML = slides[index].tagLine
	bullets[index].classList.add("dot_selected")
}



function arrowsClick() {
	arrowLeft.addEventListener("click", function(){
		index--
		console.log("arrow_left")
		bullets[index +1].classList.remove("dot_selected")
		iterationArrowImg()
	})
	arrowRight.addEventListener("click", function() {
		index++
		console.log("arrow_right")
		bullets[index -1].classList.remove("dot_selected")
		iterationArrowImg()
	})
}

arrowsClick()

