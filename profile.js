
	$(document).ready(function(){
		var bottom=$("header").outerHeight();
		var header=$("header").offset().top + bottom;
     $(window).scroll(function(){
          // header fixed only when window width greater than 991px
         if($(window).width()>991){
     	if($(window).scrollTop()>=header){
     		$("header").addClass("sticky")
     	}
     	else{
     	 $("header").removeClass("sticky")	
     	}
     }
     })

     // navbar active link

     $(".navbar ul li a").click(function(){
         $(".navbar ul li a").removeClass("active");
         $(this).addClass("active");    
     })
  
// The function toggles more (hidden) text when the user clicks on "Read more". The IF ELSE statement ensures that the text 'read more' and 'read less' changes interchangeably when clicked on.
    $('.moreless-button').click(function() {
        $('.moretext').slideToggle();
        if ($('.moreless-button').text() == "Read More") {
            $(this).text("Read Less")
        } else {
            $(this).text("Read More")
        }
    })
})



