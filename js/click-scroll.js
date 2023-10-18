//jquery-click-scroll
//by syamsul'isul' Arifin

var sectionArray = [1, 2, 3, 4, 5];

$.each(sectionArray, function(index, value){
          
     $(document).scroll(function(){
        var sectionId = 'section_' + value;
    var targetSection = $('#' + sectionId);

    if (!targetSection.length) {
        console.error('Section with ID ' + sectionId + ' not found.');
        return;
    }

    var offsetSection = targetSection.offset();

    if (!offsetSection) {
        console.error('Offset for section ' + sectionId + ' is undefined.');
        return;
    }

         var offsetSection = $('#' + 'section_' + value).offset().top - 84;
         var docScroll = $(document).scrollTop();
         var docScroll1 = docScroll + 1;

         if ( docScroll1 >= offsetSection ){
             $('.navbar-nav .nav-item .nav-link').removeClass('active');
             $('.navbar-nav .nav-item .nav-link:link').addClass('inactive');  
             $('.navbar-nav .nav-item .nav-link').eq(index).addClass('active');
             $('.navbar-nav .nav-item .nav-link').eq(index).removeClass('inactive');
         }
         
     });
    
    $('.click-scroll').eq(index).click(function(e){
        var offsetClick = $('#' + 'section_' + value).offset().top - 84;
        e.preventDefault();
        $('html, body').animate({
            'scrollTop':offsetClick
        }, 300)
    });
    
});

$(document).ready(function(){
    $('.navbar-nav .nav-item .nav-link:link').addClass('inactive');    
    $('.navbar-nav .nav-item .nav-link').eq(0).addClass('active');
    $('.navbar-nav .nav-item .nav-link:link').eq(0).removeClass('inactive');
});