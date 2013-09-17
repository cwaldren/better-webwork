var $eq = $("#eqEditorDiv");

if ($eq.length != 0)
{
	var topOffset = 0;
	var leftOffset = 0;
	var $codeshard = $(".codeshard");
	//$eq.fadeTo(0,0);

	$("#openEqEditor").css({"width":"23px", "height":"23px"})
	$codeshard.css({"position":"relative", "z-index":4});
	$codeshard.mousedown(function(){
		if(!$(this).is(":focus")) {
		//$eq.fadeTo(0,0);

		setTimeout(function(){
		topOffset = parseInt($eq.css("top")) + 8;
		leftOffset = parseInt($eq.css("left")) - 7;
		$eq.css({"top":topOffset+"px", "left":leftOffset+"px"})
		$eq.show()
		//$eq.fadeTo(1,200)
		}, 0)
	}
	});

	$codeshard.blur(function(){$eq.hide()})
	$eq.hover(function(){
		$eq.stop().animate({left: leftOffset + 10})
	}, function(){
		$eq.stop().animate({left: leftOffset})
	})



}


$table = $("table[border=1]");
$("form").attr("autocomplete", "off");
$firstRow = $table.find("tr").eq(0).find("td");
$firstRow.attr('unselectable','on')
     .css({'-moz-user-select':'-moz-none',
           '-moz-user-select':'none',
           '-o-user-select':'none',
           '-khtml-user-select':'none', /* you could also put this in a class */
           '-webkit-user-select':'none',/* and add the CSS class here instead */
           '-ms-user-select':'none',
           'user-select':'none'
     }).bind('selectstart', function(){ return false; });


$firstRow.css("cursor", "pointer")
$firstRow.click(function(){
	if ($(this).hasClass("_hidden"))
	{
		$(this).removeClass("_hidden");
		var col = $(this).index();
		$table.find("tr").each(function(){
			$column = $(this).find("td").eq(col);
			$column.css("opacity", 1)
			$column.css("color", "black")
		});
	} 
	else
	{
		$(this).addClass("_hidden");
		var col = $(this).index();
		$table.find("tr").each(function(){
			$column = $(this).find("td").eq(col);
			$column.css("opacity", .05)
			$column.css("color", "white")
		});
	}
});