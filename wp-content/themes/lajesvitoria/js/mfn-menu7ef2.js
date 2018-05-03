/*
@Name:		Horizontal multilevel menu
@Author:    Muffin Group
@WWW:       www.muffingroup.com
@Version:   1.2.4 - multiple columns last attribute
*/

(function($){
	$.fn.extend({
		muffingroup_menu: function(options) {
			
			var defaults = {
				delay       : 50,
				hoverClass  : 'hover',
				arrows      : true,
				animation   : 'fade',
				addLast		: true
			};
			
			options = $.extend(defaults, options);
			
			var menu = $(this);
			menu.find("li:has(ul)").addClass("submenu");
			menu.children("li").children("a").append("<span class='border'></span>");

			if(options.arrows) {
				menu.find("li ul li:has(ul) > a").append("<span style='display: block; position: absolute; right: 5px; top: 7px; font-size: 11px;'><i class='icon-caret-right'></i></span>");
			}

			menu.find("li").hover(function() {
				$(this).addClass(options.hoverClass);
				if (options.animation === "fade") {
					$(this).children("ul").fadeIn(options.delay);
				} else if (options.animation === "toggle") {
					$(this).children("ul").slideToggle(options.delay);
				}
			}, function(){
				$(this).removeClass(options.hoverClass);
				if (options.animation === "fade") {
					$(this).children("ul").fadeOut(options.delay);
				} else if (options.animation === "toggle") {
					$(this).children("ul").slideToggle(options.delay);
				}
			});
			
			if(options.addLast) {
				$("> li:last-child", menu)
					.addClass("last")
					.prev()
						.addClass("last")
						.prev()
							.addClass("last");
				$(".submenu ul li:last-child", menu).addClass("last-item");
			}
			
			menu.find("> li.submenu > a").append("<span style='display: block; position: absolute; right: 8px; top: 7px; font-size: 9px;'><i class='icon-chevron-down'></i></span>");
			
		}
	});
})(jQuery);