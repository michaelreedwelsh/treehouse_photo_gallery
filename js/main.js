$('.gallery img').each(function(){
$(this).prop('alt', $(this).prop('alt').toLowerCase());
});

$(".search-box").on("keyup", function () {
   var searchTerm = $(this).val().toLowerCase();
   $(".gallery img").each( function () {
      if ( $(this).prop('alt').indexOf(searchTerm) > -1 || searchTerm.length < 1) {
         $(this).fadeIn(500);
      
   } else {
      $(this).fadeOut(500);
   }
});
});

$("header").sticky();