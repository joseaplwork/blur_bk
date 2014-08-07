'use strict';

/**
 * @ngdoc function
 * @name blurApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the blurApp
 */
angular.module('blurApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.open = function(){
    	$(document).scroll(function(event) {
    		/* Act on the event */
    		var el = event.currentTarget;
			$(".overflow_bk div").css('background-position-y' , '-'+$(el).scrollTop()+'px ');
    	});
    	html2canvas($('.content'), {
		    onrendered: function(canvas) {
		        // canvas is the final rendered <canvas> element
				var image = new Image();
				image.src = canvas.toDataURL("image/png");
    			if ($(".overflow_bk div").css('background-image').replace('url(','').replace(')','') != image.src ) $(".overflow_bk div").css({'background-image': 'url('+image.src+')','background-position' : '-'+($(document.body).width()-(100/40))+'px '+$(document).scrollTop()+'px'});
    			
    			$("nav").toggleClass("active");
    			$(".overflow_bk").toggleClass("active");
		    }
		});
    }
  });
