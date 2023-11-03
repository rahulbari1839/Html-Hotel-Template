
jQuery('document').ready(function(){


    jQuery('.rbt_laoder_wrapper').hide();
    jQuery('.Body-layout').show();

    

     RBTTemplateHtmlWowCall();
    RBTTemplateImageViewerCall();


     $('.carousel-slider-Rbt').owlCarousel({
        items: 1,
        animateOut: '.carousel-slider-Rbt',
        loop: true,
        margin: 10,
        nav:true,
        dots: false,
        autoplay:true,

    });


     $('.carousel-slider-room ').owlCarousel({
        /*items: 3,*/
        animateOut: '.carousel-slider-Rbt',
        loop: true,
        margin: 10,
        nav:true,
        dots: false,
        autoplay:true,

        responsive:{
            0:{
                items:1
            },
            
            1000: {
               items:3
            }
        }    


    });

})   

function RBTTemplateHtmlWowCall(){
    if(jQuery('body').find('.wow').length != 0 ){

        new WOW().init();
    }
}



function RBTTemplateImageViewerCall(){
    if(jQuery('.rbt_main_container_image_viewer img').length != 0){
        jQuery('.rbt_main_container_image_viewer').each(function(){
                // call gallery view
                new Viewer(document.getElementById(jQuery(this).attr('id')));
        });
    }
}