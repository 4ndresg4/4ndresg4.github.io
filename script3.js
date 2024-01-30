var viewModel = {
	data: {
		shoeOptions: [{
			"shoeColor": "Color Cafe con Negro",
			"RRP": "$70.000",
			"discountPrice": "$49.990",
			"className": "cpc-product-black",
			"rating": 90,
			"inputID": "rad4",
			"labelClass": "cpc-radio-black",
			"shoeImage": "https://i.imgur.com/KHN5eOq.png"
		}, {
			"shoeColor": "Color Cafe con Negro",
			"RRP": "$70.000",
			"discountPrice": "$49.990",
			"className": "cpc-product-grey",
			"rating": 90,
			"inputID": "rad5",
			"labelClass": "cpc-radio-grey",
			"shoeImage": "https://i.imgur.com/KHN5eOq.png"
		},
		//  {
		// 	"shoeColor": "Color Cafe con Negro",
		// 	"RRP": "$70.000",
		// 	"discountPrice": "$49.990",
		// 	"className": "cpc-product-black",
		// 	"rating": 90,
		// 	"inputID": "rad6",
		// 	"labelClass": "cpc-radio-green1",
		// 	"shoeImage": "https://i.imgur.com/q8j6Zya.png"
		// }, {
		// 	"shoeColor": "Color Cafe con Negro",
		// 	"RRP": "$70.000",
		// 	"discountPrice": "$49.990",
		// 	"className": "cpc-product-grey",
		// 	"rating": 90,
		// 	"inputID": "rad7",
		// 	"labelClass": "cpc-radio-red",
		// 	"shoeImage": "https://i.imgur.com/q8j6Zya.png"
		// }
	],
		currentShoeOption: ko.observable({
		    	"shoeColor": "Color Cafe con Negro",
				"RRP": "$70.000",
				"discountPrice": "$49.990",
			    "className": "cpc-product-black",
			    "rating": 90,
			    "inputID": "rad4",
				"shoeImage": "https://i.imgur.com/KHN5eOq.png"
			}) // Passing this first line in to set as a default value
	},
	functions: {
		colorOptionClick: function(index) {
			viewModel.data.currentShoeOption(viewModel.data.shoeOptions[index]);
			var image = $('#cpc-img').clone().removeClass();
			$('#cpc-img').remove();
			$('.cpc-img-wrapper').append(image);
			$('#cpc-img').addClass('cpc-product-shoe-img animated fadeInLeft');
			$('#cpc-img').prop("src", viewModel.data.currentShoeOption().shoeImage)

		},
		checkedRadio: function() {
			return true;
		},
	}
};
ko.applyBindings(viewModel);

$(document).ready(function() {
	$("#rad1").prop("checked", true)
});

$.preloadImages = function() {
	for (var i = 0; i < arguments.length; i++) {
		$("<img />").attr("src", arguments[i]);
	}
}

$.preloadImages("http://gdurl.com/XBhW", "http://gdurl.com/0Nzm", "http://gdurl.com/oAyW", "http://gdurl.com/Avin");

