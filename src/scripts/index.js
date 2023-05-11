const burger = document.getElementById('burger')
const menu = document.getElementById('menu')
burger.addEventListener('click', () => {
	menu.classList.toggle('active')
})
const close = document.getElementById('close')
close.addEventListener('click', () => {
	menu.classList.toggle('active')
})
const links = menu.querySelectorAll('a')
links.forEach((element) => {
	element.addEventListener('click', () => {
		menu.classList.toggle('active')
	})
});

new Swiper('.stages__swiper', {
	slidesPerView: 'auto',
	spaceBetween: 20,
	breakpoints: {
		992: {
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
			}
		}
	}
})

function deactivateTabs() {
	document.querySelectorAll('.schedule__tab').forEach((elem) => {
		elem.classList.remove('active')
	})
	document.querySelectorAll('.schedule__content').forEach((elem) => {
		elem.classList.remove('active')
	})
}

document.getElementById('tab-1').addEventListener('click', () => {
	deactivateTabs()
	document.getElementById('tab-1').classList.add('active')
	document.getElementById('content-1').classList.add('active')
})

document.getElementById('tab-2').addEventListener('click', () => {
	deactivateTabs()
	document.getElementById('tab-2').classList.add('active')
	document.getElementById('content-2').classList.add('active')
})

document.getElementById('tab-2').addEventListener('click', () => {
	deactivateTabs()
	document.getElementById('tab-2').classList.add('active')
	document.getElementById('content-2').classList.add('active')
})

document.getElementById('tab-3').addEventListener('click', () => {
	deactivateTabs()
	document.getElementById('tab-3').classList.add('active')
	document.getElementById('content-3').classList.add('active')
})

document.getElementById('tab-4').addEventListener('click', () => {
	deactivateTabs()
	document.getElementById('tab-4').classList.add('active')
	document.getElementById('content-4').classList.add('active')
})

document.getElementById('tab-5').addEventListener('click', () => {
	deactivateTabs()
	document.getElementById('tab-5').classList.add('active')
	document.getElementById('content-5').classList.add('active')
})

document.getElementById('tab-6').addEventListener('click', () => {
	deactivateTabs()
	document.getElementById('tab-6').classList.add('active')
	document.getElementById('content-6').classList.add('active')
})

// video controller
const playButtons = document.querySelectorAll('.video-controler')
playButtons.forEach((elem) => {
	elem.addEventListener('click', () => {
		elem.classList.add('active')
		elem.previousElementSibling.play()
	})

	elem.previousElementSibling.addEventListener('click', () => {
		if (elem.classList.contains('active')) {
			elem.classList.remove('active')
			elem.previousElementSibling.pause()
		}
	})
})

document.getElementById('show-more').addEventListener('click', () => {
	document.getElementById('show-more').style.display = 'none'
	document.querySelector('.reviews__cards').classList.add('active')
})
