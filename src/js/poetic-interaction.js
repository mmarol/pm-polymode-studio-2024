import $ from "jquery";

export { hoverImage };

function hoverImage(selector) {
	let dataImage;
	let backgroundImage;
	let dataOpacity;
	let imageOpacity;
	$(selector)
		.on("mouseenter", function () {
			dataImage = $(this).data("image-id");
			backgroundImage = $("#" + dataImage);
			dataOpacity = $(this).data("opacity");
			imageOpacity = parseFloat($(this).data("opacity")) / 100;
			backgroundImage.css({
				opacity: imageOpacity,
			});
		})
		.on("mouseleave", function () {
			backgroundImage.css({
				opacity: 0,
			});
		});
}

// import tippy from "tippy.js";

// tippy(".poetic__highlight", {
// 	content(reference) {
// 		const id = reference.getAttribute("data-template");
// 		const template = document.getElementById(id);
// 		return template;
// 	},
// 	popperOptions: {
// 		modifiers: [
// 			{
// 				name: "flip",
// 				enabled: false,
// 			},
// 		],
// 	},
// 	// trigger: "click",
// 	allowHTML: true,
// 	placement: "left",
// 	// set the offset to the center of the word
// 	offset: ({ placement, reference, popper }) => {
// 		return [0, (reference.width + 350) / -2];
// 	},
// 	maxWidth: 350,
// 	duration: 200,
// 	arrow: false,
// 	animation: "scale",
// 	zIndex: -999,
// });
