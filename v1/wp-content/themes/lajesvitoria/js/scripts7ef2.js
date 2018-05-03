jQuery(document).ready(function() {

	var mfn_slider_clients = {
		'visible':	5,		// Integer (2-6): Exactly that number of items will be visible
		'auto':		4,		// Integer: Specifies how many seconds to periodically autoscroll the content. If set to 0 (default) then autoscrolling is turned off.
		'wrap':		"both"	// String: Specifies whether to wrap at the first/last item (or both) and jump back to the start/end. Options are "first", "last", "both" as string. If set to null, wrapping is turned off (default)
	};
	
	/* ---------------------------------------------------------------------------
	 * Clients
	 * --------------------------------------------------------------------------- */
	function OurClients_initCallback(carousel) {
		jQuery('.Our_clients_slider .slider_control_prev').bind('click', function() { carousel.prev(); return false; });
		jQuery('.Our_clients_slider .slider_control_next').bind('click', function() { carousel.next(); return false; });
	}
		
    jQuery(".Our_clients_slider .inside > ul").jcarousel({
    	visible:		mfn_slider_clients['visible'],
        auto:			mfn_slider_clients['auto'],
		wrap:			mfn_slider_clients['wrap'],
		scroll:			1,
        initCallback:	OurClients_initCallback,
        buttonNextHTML: null,
        buttonPrevHTML: null
    });
	    
	/* ---------------------------------------------------------------------------
	 * Fancybox
	 * --------------------------------------------------------------------------- */
	jQuery("a.fancybox, .gallery-icon a, .the_content .attachment a").fancybox({
		'overlayShow'	: false,
		'transitionIn'	: 'elastic',
		'transitionOut'	: 'elastic'
	});
		
	jQuery("a.iframe").fancybox({
		'transitionIn'	: 'none',
		'transitionOut'	: 'none'
	});
	
	jQuery("a.fancyboxFull").fancybox({
		'transitionIn'	: 'elastic',
		'transitionOut'	: 'elastic',
		'autoScale'		: false
	});

	/* ---------------------------------------------------------------------------
	 * WP Gallery
	 * --------------------------------------------------------------------------- */
	jQuery(".gallery-icon a").attr("rel","gallery");
		
	
	/* ---------------------------------------------------------------------------
	 * Add classes first/last
	 * --------------------------------------------------------------------------- */
	jQuery(".Twitter ul li:first-child, .Recent_comments li:first-child, .Latest_posts li:first-child").addClass("first");
	jQuery(".Recent_comments li:last-child, .Latest_posts li:last-child, .Twitter li:last-child, .get_in_touch li:last-child, .pricing-box .plan-inside ul li:last-child").addClass("last");
	jQuery(".commentlist li li .comment-body:last-child").addClass("last");
	jQuery(".commentlist li .comment-body:last-child").addClass("lastBorder");
	jQuery(".widget ul.menu li:last-child, .widget_links ul li:last-child, .widget_meta ul li:last-child").addClass("last");
	
	// clear before each features-list row --------------------------------
	jQuery('.two-third .features-list ul li:nth-child(2n+3)').css("clear", "both");	
	jQuery('.one .features-list ul li:nth-child(3n+4)').css("clear", "both");	
	
	// clear before each portfolio items row --------------------------------
	jQuery('.Projects_inside_wrapper .one-second:nth-child(2n+3)').css("clear", "both");	
	jQuery('.Projects_inside_wrapper .one-third:nth-child(3n+4)').css("clear", "both");	
	jQuery('.Projects_inside_wrapper .one-fourth:nth-child(4n+5)').css("clear", "both");	
	
	
	/* ---------------------------------------------------------------------------
	 * Add classes first/last
	 * --------------------------------------------------------------------------- */
	jQuery(".Twitter ul li:first-child, .Recent_comments li:first-child, .Latest_posts li:first-child").addClass("first");
	
	
	/* ---------------------------------------------------------------------------
	 * Main menu
	 * --------------------------------------------------------------------------- */
	jQuery("#menu > ul").muffingroup_menu({
		delay: 0,
		hoverClass: 'hover',
		arrows: true,
		animation: 'fade'
	});
	
	
	/* ---------------------------------------------------------------------------
	 * Testimonial
	 * --------------------------------------------------------------------------- */
	jQuery(".testimonial ul.slider").responsiveSlides({
		pager: true,
		timeout: 4000
	});
			
	
	/* ---------------------------------------------------------------------------
	 * Social box
	 * --------------------------------------------------------------------------- */	
	jQuery('.social > a').click(function() {
		jQuery(this).toggleClass('active');
		jQuery('.social .social-box').slideToggle("fast");
		return false;
	});
	

	/* ---------------------------------------------------------------------------
	 * Gallery
	 * --------------------------------------------------------------------------- */
	jQuery(".gallery-item img").css("height","auto").css("width","100%");
	
	
	/* ---------------------------------------------------------------------------
	 * IE placeholder fix
	 * --------------------------------------------------------------------------- */
	jQuery("[placeholder]").each(function(){
		if(jQuery(this).val()==="" && jQuery(this).attr("placeholder")!==""){
			jQuery(this).val(jQuery(this).attr("placeholder"));
			jQuery(this).focus(function(){
				if(jQuery(this).val()===jQuery(this).attr("placeholder")) { jQuery(this).val(""); }
			});
			jQuery(this).blur(function(){
				if(jQuery(this).val()==="") { jQuery(this).val(jQuery(this).attr("placeholder")); }
			});
		}
	});
	

	/* ---------------------------------------------------------------------------
	 * Social
	 * --------------------------------------------------------------------------- */
	var social_item  = jQuery('ul.social li');
	var social_width = (social_item.length * (social_item.innerWidth() + 6));
	jQuery("ul.social").css("width", social_width);
	

	/* ---------------------------------------------------------------------------
	 * Image frames
	 * --------------------------------------------------------------------------- */
	jQuery(".wp-caption a").hover( function() {
		jQuery(this).find(".overlay").fadeIn(100);
		jQuery(this).find("span.control_button").fadeIn(300);
	}, function() {
		jQuery(this).find(".overlay").fadeOut(100);
		jQuery(this).find("span.control_button").fadeOut(200);
	});
	
	
	/* ---------------------------------------------------------------------------
	 * Tabs
	 * --------------------------------------------------------------------------- */
	jQuery(".jq-tabs").tabs();
	jQuery(".ui-tabs .ui-tabs-nav li:last-child").addClass("last");
	
	
	/* ---------------------------------------------------------------------------
	 * mfn accordion/faq
	 * --------------------------------------------------------------------------- */
	jQuery(".mfn-acc .question:not(:first)").children(".answer").hide();
	jQuery(".mfn-acc .question:first").addClass("active");
	jQuery(".mfn-acc .question > h5").append('<span class="icon"></span>');
	
	jQuery(".mfn-acc .question > h5").click(function() {
		if(jQuery(this).parent().hasClass("active")) {
			jQuery(this).parent().removeClass("active").children(".answer").slideToggle(200);
		}
		else
		{
			jQuery(".mfn-acc .question").each(function() {
				if(jQuery(this).hasClass("active")) {
					jQuery(this).removeClass("active").children(".answer").slideToggle(200);
				}
			});
			jQuery(this).parent().addClass("active");
			jQuery(this).next(".answer").slideToggle(200);
		}
	});
	
	/* ---------------------------------------------------------------------------
	 * menu bottom
	 * --------------------------------------------------------------------------- */	
	jQuery(".menu_bottom > ul > li > a").append('<span></span>');
	
	
	/* ---------------------------------------------------------------------------
	 * Clients
	 * --------------------------------------------------------------------------- */
    jQuery(".Our_clients_slider > ul").jcarousel({
        scroll: 1,
		visible: 1,
		wrap: 'circular',
        buttonNextHTML: '<a class="Our_clients_slider_next" href="javascript:;"><i class="icon-chevron-right"></i></a>',
        buttonPrevHTML: '<a class="Our_clients_slider_prev" href="javascript:;"><i class="icon-chevron-left"></i></a>'
    });
    

    /* ---------------------------------------------------------------------------
	 * Ajax contact form
	 * --------------------------------------------------------------------------- */
    function mfn_contact_validate(){
		var error = false;
		jQuery('.contact_form input.required, .contact_form textarea.required').removeClass('inp_error');
		
		jQuery('.contact_form input.required, .contact_form textarea.required').each(function() {
			if ( (! this.value) || ( this.value===this.defaultValue ) || ( this.value===jQuery(this).attr('placeholder') ) ) {
				jQuery(this).addClass('inp_error');
				error = true;
			}
		});

		var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
		if( ! emailReg.test(jQuery('.contact_form #Email').val()) )
		{
			jQuery('.contact_form #Email').addClass('inp_error');
			error = true;
		}
			
		if( error ){
			return false;
		}
		return true;
	}
	
	function mfn_contact_processJson(data){
		if( data.status && data.status === 'ok' ){
			jQuery('.contact_form .alert_success').show();
		} else {
			jQuery('.contact_form .alert_error').show();
		}
	}
	
	jQuery('#json_contact_form').ajaxForm({ 
        dataType:		'json', 
		beforeSubmit:	mfn_contact_validate,
        success:		mfn_contact_processJson 
    }); 
	
	
	/* ---------------------------------------------------------------------------
	 * Go to top
	 * --------------------------------------------------------------------------- */
	jQuery("#back_to_top").hide();
	if (jQuery(window).width() > 1150) {
		jQuery(function(){
			jQuery(window).scroll(function(){
				if (jQuery(this).scrollTop() > 100) {
					jQuery('#back_to_top').fadeIn(400);
				}
				else {
					jQuery('#back_to_top').fadeOut(200);
				}
			});
			
			// scroll body to 0px on click
			jQuery('#back_to_top').click(function(){
				jQuery('body,html').animate({
					scrollTop: 0
				}, 500);
				return false;
			});
		});
	}
	
	
	/* ---------------------------------------------------------------------------
	 * hoverdir
	 * --------------------------------------------------------------------------- */
	jQuery('.da-thumbs > li:not(.header_li) > a').each( function() { jQuery(this).hoverdir({
		hoverDelay : 75
	}); } );
	
	
	/* ---------------------------------------------------------------------------
	 * isotope
	 * --------------------------------------------------------------------------- */
	function mfnIsotope(domEl,isoWrapper){
		var filter = domEl.attr('rel');
		isoWrapper.isotope({ filter: filter });
		
		domEl.parents('ul').find('li.current-cat').removeClass('current-cat');
		domEl.parent().addClass('current-cat');
	}
	
	jQuery('.portfolio-isotope .categories a').click(function(e){
		e.preventDefault();
		mfnIsotope(jQuery(this),jQuery('.portfolio-isotope .Projects_inside_wrapper'));
	});
	
	jQuery('#Projects .categories a').click(function(e){
		e.preventDefault();
		mfnIsotope(jQuery(this),jQuery('#Projects .Projects_inside_wrapper'));
	});
	
});

jQuery(window).load(function() {
	
	/* ---------------------------------------------------------------------------
	 * isotope
	 * --------------------------------------------------------------------------- */
	jQuery('.portfolio-isotope .Projects_inside_wrapper').isotope({
		itemSelector: '.column',
		layoutMode: 'fitRows'
	});
	jQuery('#Projects .Projects_inside_wrapper').isotope({
		itemSelector: '.column',
		layoutMode: 'fitRows'
	});
    
});