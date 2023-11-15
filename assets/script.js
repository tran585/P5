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

let container_banner = document.querySelectorAll("#banner p, span")
let arrow_left_right = document.querySelectorAll("#banner .arrow")
let test = document.querySelector("#banner .banner-img")
let bullet = document.querySelectorAll("#banner .dots .dot")
let i = 0
let d = 0
bullet[i].classList.add("dot_selected")


//left
arrow_left_right[0].addEventListener("click", function() {
		d = +1
		i--
		d += i //pour l'itération du bullet right
		if (i < 0) {
			i = 3
			d = 0
			console.log(i)
			console.log(d)
		}
		console.log("arrow_left")
		test.src = slides[i].image
		container_banner[0].innerHTML = slides[i].tagLine
		bullet[i].classList.add("dot_selected")
		bullet[d].classList.remove("dot_selected")
		console.log(i)
		console.log(d)
	}
)

//right
arrow_left_right[1].addEventListener("click", function() {
		d = -1
		i++ 
		d += i //pour l'itération du bullet right
		if (i > 3) {
			d = 3
			i = 0
			console.log(i)
			console.log(d)
		}
		console.log("arrow_right")
		test.src = slides[i].image
		container_banner[0].innerHTML = slides[i].tagLine
		bullet[i].classList.add("dot_selected")
		bullet[d].classList.remove("dot_selected")
		console.log(i)
		console.log(d)
	}
)