(function($){

	var $container = $(".parallax");
	var $divs = $container.find("div.parallax-background");
	var scrolledThing = document.body;
	var liHeight = $divs.eq(0).closest("li").height();
	var diffHeight= $divs.eq(0).height() - liHeight;
	var len=$divs.length;
	

	var i,div,li,offset,scroll,top;


	var offsets = $divs.get().map(function(div,d){
		return $(div).offset();
	})

	var render = function(){

		top = scrolledThing.scrollTop;
		
		for(i=0;i<len;i++){

			div = $divs[i];

			offset = top - offsets[i].top;

			scroll = ~~(offset / liHeight * diffHeight);

			transform = 'translate3d(0px, ' + (scroll*2) + 'px, 0px)';

			div.style.webkitTransform = transform;
		}
	};

	(function loop(){
		requestAnimationFrame(loop);
		render();
	})();


})(jQuery);