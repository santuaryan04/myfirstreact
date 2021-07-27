
//responsive-navigation
jQuery(function() {
  $('.mob-menu').on('click', function(){
    $('.hamburger1').toggleClass('active');
    $('.navbar').animate({
      height: "toggle",
    }, 500);
  });
  
  $(window).resize(function(){
    if($(window).width()>768){
      $('.navbar').css({display: 'flex'});
    };
  });
});

function sticky_relocate() {
    var window_top = $(window).scrollTop();
    var div_top = $('#sticky-anchor').offset().top;
    if (window_top > div_top) {
      $('#sticky').addClass('stick');
    } else {
      $('#sticky').removeClass('stick');
    }
  }
  
  $(function() {
    $(window).scroll(sticky_relocate);
    sticky_relocate();
  });


  // -----back-to-top----
var btn = $('#button');

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});



//----owl-slider-partner

jQuery(function() {
    $("#news-slider").owlCarousel({
        items : 4,
        itemsDesktop:[1199,4],
        itemsDesktopSmall:[980,2],
        itemsMobile : [600,1],
        navigation:true,
        navigationText:["",""],
        pagination:true,
        autoPlay:true
    });
});
//----owl-banner

$(function() {
  $("#banner").owlCarousel({
      items : 1,
      itemsDesktop:[1199,4],
      itemsDesktopSmall:[980,2],
      itemsMobile : [600,1],
      navigation:true,
      navigationText:["",""],
      pagination:true,
      autoPlay:true
  });
});

//----owl-slider-partner

jQuery(function() {
    $("#delivery-app").owlCarousel({
        items : 4,
        itemsDesktop:[1199,4],
        itemsDesktopSmall:[980,2],
        itemsMobile : [600,1],
        navigation:true,
        navigationText:["",""],
        pagination:true,
        autoPlay:true
    });
});
//----owl-slider-partner

jQuery(function() {
    $("#fitter-app").owlCarousel({
        items : 4,
        itemsDesktop:[1199,4],
        itemsDesktopSmall:[980,2],
        itemsMobile : [600,1],
        navigation:true,
        navigationText:["",""],
        pagination:true,
        autoPlay:true
    });
});

//scroll----
//Default active on home
//$('#s1').addClass("active");
/*
Smooth scrolling
*/
$("#ab").on("click", function() {
  $('html, body').animate({
      scrollTop:  $("#3").offset().top-100
  }, 1000);
return false;
});
$("#c2").on("click",function() {
  $('html, body').animate({
      scrollTop:        $("#2").offset().top-100
  }, 1000);
return false;
});
$("#c3").on("click",function() {
  $('html, body').animate({
      scrollTop:        $("#3").offset().top-100
  }, 1000);
return false;
});
$("#c4").on("click",function() {
  $('html, body').animate({
      scrollTop:        $("#4").offset().top-100
  }, 1000);
return false;
});
$("#s1").on("click",function() {
  $('html, body').animate({
      scrollTop:        $("#1").offset().top-65
  }, 1000);
return false;
});

$("#s2").on("click",function() {
  $('html, body').animate({
      scrollTop:        $("#2").offset().top-100
  }, 1000);
return false;
});

$("#s3").on("click",function() {
  $('html, body').animate({
      scrollTop:        $("#3").offset().top-100
  }, 1000);
return false;
});

$("#s4").on("click",function() {
$(this).addClass("active");
  $('html, body').animate({
      scrollTop:        $("#4").offset().top-100
  }, 1000);
return false;
});
$("#s5").on("click",function() {
  $(this).addClass("active");
    $('html, body').animate({
        scrollTop:        $("#5").offset().top-100
    }, 1000);
  return false;
  });


  $("#toTop").on("click",function() {
  $('html, body').animate({
      scrollTop:        $("#1").offset().top-65
  }, 1000);
return false;
});



/*
Using jquery waypoints to change active on scroll
*/

$('#1').waypoint(function() {
  $(".main-menu li").children().removeClass("active");
  $("#s1").addClass("active");
  }, { offset: 101 });

$('#2').waypoint(function() {
$(".main-menu li").children().removeClass("active");
$("#s2").addClass("active");
}, { offset: 101 });

$('#3').waypoint(function() {
$(".main-menu li").children().removeClass("active");
$("#s3").addClass("active");
}, { offset: 101 });

$('#4').waypoint(function() {
$(".main-menu li").children().removeClass("active");
$("#s4").addClass("active");
}, { offset: 101 });

$('#5').waypoint(function() {
  $(".main-menu li").children().removeClass("active");
  $("#s5").addClass("active");
  }, { offset: 101 });


$('#1').waypoint(function() {
$(".main-menu li").children().removeClass("active");
$("#s1").addClass("active");
}, { offset: 0 });

$('#2').waypoint(function() {
$(".to-top").addClass("visible");
}, { offset: 100 });

$('#1').waypoint(function(event, direction) {
$(".to-top").removeClass("visible");
}, { offset: 30 });
//-------animation-on-scroll


