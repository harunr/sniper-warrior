
(function($){
	$(function(){
        
        
        $('.hamberger').click(function() {
            $('body').toggleClass('nav-shown');
        }); 
        
        $('.search-btn').click(function() {
            $('body').addClass('search-form-shown');
        }) 
        $('.search-form-close').click(function() {
            $('body').removeClass('search-form-shown');
        })
        
        $('.popup-video-play').click(function() {
            $('body').addClass('popup-video-shown');
        })
        $('.modal-close').click(function() {
            $('body').removeClass('popup-video-shown');
        })
        
        // Headroom init function
        var header = new Headroom(document.querySelector(".header-section"), {
            tolerance: 5,
            offset : 205,
            classes: {
                initial: "headroom",
                pinned: "slideDown",
                unpinned: "slideUp"
            }
        });
        header.init();
        
        if($('.stories-content-slider-wrap').length){
            $('.stories-content-slider-wrap').slick({
                centerMode: true,
                centerPadding: '0',
                slidesToShow: 1,
                arrows: true,
                dots: false,
                autoplay: true,

            });   
        }
      

        // Phone nav click function
        $('.menu-icon-wrap').click(function () {
            $("body").toggleClass("navShown");
            $(".nav-wrap").fadeIn()
        });

        
     
        //Counter
        if($('.importance-item-wrap').length){
            $('#number1, #number3').counterUp({
            delay: 10,
            time: 2000
        });
            $('#number2, #number4').counterUp({
                delay: 10,
                time: 3000
       });
    }


       
		
	})// End ready function.

    

})(jQuery)

