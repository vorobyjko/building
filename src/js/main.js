global.jQuery = require("jquery");
$ = jQuery;
var bootstrap = require("bootstrap");

$(document).ready(function(){
	$(".carusel-img").each(function (i, el) {
		$(el).css('background', 'url(css/img/slide/'+ (i+1) + '.jpg) center center');
	})


	$('a[href^="#"]').click(function () { 
		elementClick = $(this).attr("href");
		destination = $(elementClick).offset().top;
		if(navigator.userAgent.indexOf("Safari")){
			$('body').animate( { scrollTop: destination }, 1000 );
		}else{
			$('html').animate( { scrollTop: destination }, 1000 );
		}
		return false;
	});


	function initialize() {
		var mapCanvas = document.getElementById('map');
		var myLatlng = new google.maps.LatLng(50.428981, 30.450892);

		var marker = new google.maps.Marker({
			position: myLatlng,
			title:"Hello World!"
		});


		var mapOptions = {
			center: new google.maps.LatLng(50.428981, 30.450892),
			zoom: 14,
			mapTypeId: google.maps.MapTypeId.ROADMAP
		}
		var map = new google.maps.Map(mapCanvas, mapOptions);

		marker.setMap(map);
	}
	google.maps.event.addDomListener(window, 'load', initialize);



	



});