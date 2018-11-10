$(document).ready(function() {


		$('body').delegate('.accordion .accord-header','click', function(e){
   
      if($(this).next("div").is(":visible")){
        $(this).next("div").slideUp("slow");
        $('p.menu-desc').slideDown("slow")
      } else {
        $(".accordion .accord-content").slideUp("slow");
        $(this).next("div").slideToggle("slow");
        $('p.menu-desc').slideUp("slow")
      }
    });



	$('body').delegate('.ss_button','click', function(e){ 
	$('.ss_content').slideUp('fast');
		$(this).next('.ss_content').slideDown('fast');	
	});



	$('body').delegate('.panel','shown.bs.collapse', function(e){
		$('p.menu-desc').hide();
	});

	$('body').delegate('.panel','show.bs.collapse', function(e){
		$('p.menu-desc').hide();
	});
	$('body').delegate('.panel','hidden.bs.collapse', function(e){
		$('p.menu-desc').show('fast');
	});

	//Add Inactive Class To All Accordion Headers
	$('.accordion-header').toggleClass('inactive-header');
	
	//Set The Accordion Content Width
	var contentwidth = $('.accordion-header').width();
	$('.accordion-content').css({'width' : contentwidth });
	
	//Open The First Accordion Section When Page Loads
	$('.accordion-header').first().toggleClass('active-header').toggleClass('inactive-header');
	$('.accordion-content').first().slideDown().toggleClass('open-content');
	
	// The Accordion Effect
	$('body').delegate('.accordion-header','click', function(e){ 
	if($(this).is('.inactive-header')) {
			$('.active-header').toggleClass('active-header').toggleClass('inactive-header').next().slideToggle().toggleClass('open-content');
			$(this).toggleClass('active-header').toggleClass('inactive-header');
			$(this).next().slideToggle().toggleClass('open-content');
		}
		
		else {
			$(this).toggleClass('active-header').toggleClass('inactive-header');
			$(this).next().slideToggle().toggleClass('open-content');
		}
	});

	$('body').delegate('.toggle','click', function(e){	

  	e.preventDefault();
  
    var $this = $(this);
  
    if ($this.next().hasClass('show')) {
        $this.next().removeClass('show');
        $this.next().slideUp(350);
    } else {
        $this.parent().parent().find('li .inner').removeClass('show');
        $this.parent().parent().find('li .inner').slideUp(350);
        $this.next().toggleClass('show');
        $this.next().slideToggle(350);
    }
});


});


