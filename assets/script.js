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

const textBanner = document.querySelector("#banner p")
const arrowLeft = document.querySelector("#banner .arrow_left")
const arrowRight = document.querySelector("#banner .arrow_right")

const imgBanner = document.querySelector("#banner .banner-img")
const bullets = document.querySelectorAll("#banner .dots .dot")
let index = 0
let indexIntervalBullets = 0
bullets[0].classList.add("dot_selected")
console.log(textBanner)


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
	imgBanner.src = slides[index].image
	textBanner.innerHTML = slides[index].tagLine
	bullets[index].classList.add("dot_selected")
}



function arrowsClick() {
	arrowLeft.addEventListener("click", function(){
		index--
		console.log("arrow left")
		bullets[index +1].classList.remove("dot_selected")
		iterationArrowImg()
	})
	arrowRight.addEventListener("click", function() {
		index++
		console.log("arrow right")
		bullets[index -1].classList.remove("dot_selected")
		iterationArrowImg()
	})
}

arrowsClick()

