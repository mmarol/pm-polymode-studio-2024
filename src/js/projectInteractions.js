import $ from "jquery";
// import "slick-carousel/slick/slick";
import imagesLoaded from "imagesloaded";
import Glide from "@glidejs/glide";

export { setupSliders, setupTabs };

let glideArray = [];
let glideMax;
let mobilePerview;
let tabletPerview;

function setupSliders() {
	glideMax = $(".glide").length;

	for (let i = 1; i < glideMax + 1; i++) {
		let sliders = document.querySelectorAll(".glide");
		let glide = document.getElementById("glide--" + i);
		let perView = glide.dataset.perView;
		if (perView > 1) {
			mobilePerview = 1;
			tabletPerview = 2;
		} else {
			mobilePerview = 1;
			tabletPerview = 1;
		}

		glideArray[i] = new Glide(glide, {
			type: "carousel",
			gap: 60,
			autoplay: false,
			animationDuration: 500,
			hoverpause: true,
			perView: perView,
			breakpoints: {
				768: {
					perView: tabletPerview,
				},
				512: {
					perView: mobilePerview,
				},
			},
		}).mount();
	}
}

function setupTabs(buttons, content) {
	// get all tab buttons
	let tabButtons = $(buttons);
	// get all tab content
	let tabContent = $(content);
	// on clicking a button
	tabButtons.on("click", function () {
		// make record of the button
		let tabButton = $(this);
		// get the data attribute
		let tabButtonData = $(this).attr("data-for-tab");
		// for each tab content
		tabContent.each(function (index) {
			// make record of the content item
			let tabContent = $(this);
			// get the data attribute
			let tabContentData = $(this).attr("data-tab");
			// if the content data attribute matches the tab attribute
			if (tabContentData == tabButtonData) {
				// add active class to the button
				tabButton.addClass("active");
				// remove active class to the button
				tabButton.siblings().removeClass("active");
				// add active class to the content item
				tabContent.addClass("active");
				// remove active class to the content item
				tabContent.siblings().removeClass("active");
			}
		});

		glideArray[tabButtonData].update();
		// $(".project__carousel--" + tabButtonData).update();
	});
}
