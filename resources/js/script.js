
  /*
    $('h1').click(function(){
        $(this).css('background-color','red')
    })
    */


$(document).ready(function(){

/*----------------------------------------------- waypoint ------------------------------------------------------------------*/

  /*sticky effect for navigation from*/ 
  $('.JS--feature').waypoint(function(direction){
    if(direction =='down'){
        $('nav').addClass('sticky');
    }else{
        $('nav').removeClass('sticky');
    }
  },{
    offset:'60px'
  });

  $('.js--wp-1').waypoint(function(direction){
      $('.js--wp-1').addClass('animate__animated animate__fadeIn')
  },{
    offset:'50%'
  });

  $('.js--wp-2').waypoint(function(direction){
    $('.js--wp-2').addClass('animate__animated animate__fadeInUp')
},{
  offset:'40%'
});

$('.js--wp-3').waypoint(function(direction){
  $('.js--wp-3').addClass('animate__animated animate__fadeIn')
},{
offset:'50%'
});

$('.js--wp-4').waypoint(function(direction){
  $('.js--wp-4').addClass('animate__animated animate__rubberBand')
},{
offset:'50%'
});

  /*--------------------------------------------- scroll effect ----------------------------------------------------------------*/
  $('.js--scroll-plan').click(function(){
    $('html,body').animate({scrollTop: $('.js--plan').offset().top},1000)
  });

  $('.js--scroll-feature').click(function(){
    $('html,body').animate({scrollTop: $('.JS--feature').offset().top},1000)
  });

  
  /*-------------------------------------------------- jQuery from css-trick.com*----------------------------------------------*/
  
  // Select all links with hashes
  $('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });

    $('.js--icon-extend').click(function(){
      var nav=$('.js--whitespace');
      bar=$('.js--icon-extend ion-icon')
      
      nav.slideToggle(200);
     
     /*if(bar.attr("name","reorder-three-outline")){
       bar.attr("name","close-outline")
       bar.removeAttr("name","reorder-three-outline")
     }else{}*/
    
     if(bar.hasClass('navicon')){
      bar.attr("name","reorder-three-outline")
      return bar.removeClass("navicon")
      }else{
      bar.attr("name","close-outline")
      return bar.addClass('navicon')
     }
     
    });
});

/*localStorage.setItem('lastname','sahu');
document.getElementById('name').innerHTML=localStorage.getItem('lastname');
*/

function capitalize(str){
  if( typeof str === "number"){
    "this is not a string it is a number"
  }else{
    return str.charAt(0).toUpperCase()+str.slice(1)
  }
};

function factorial(num){
  for(var count=num;count>0;count--){
    console.log(count);
  }
}

