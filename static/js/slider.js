var count = 1;
var slides = 4;
var pCoeff = 100 / slides;

var navigationForm = document.querySelector(".navigation__form");
var firstSlide = document.querySelector(".first");

navigationForm.addEventListener("change", function (e) {
	let postNumber = parseInt(e.target.value);
	firstSlide.style.marginLeft = -postNumber * pCoeff + "%";
});

setInterval(function () {
	if (count == slides + 1) {
		count = 1;
	} else {
		let radioToBeChecked = document.querySelector(
			'[value="' + (count - 1) + '"]'
		);
		radioToBeChecked.checked = "checked";
		firstSlide.style.marginLeft = -pCoeff * (count - 1) + "%";
		count++;
	}
}, 5000);
