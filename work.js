//Handy exists() function
jQuery.fn.exists = function(){return this.length>0;}

$(document).ready(function() {
	//Remove pointless pi button
	var $eq = $("#eqEditorDiv");
	$eq.remove();




    //Calculate the score
    doScore();
    
})

var doScore = function() {

		//Total questions on the page
		var totalQuestions = 0;

		//Get num of questions
		var enumeratedQuestions = new Array();
		var $questions = $("input[id^='AnSwEr']")
		for (var i = 0; i < $questions.length; i++)  {
			var id = parseInt($questions.eq(i).attr("id").substr(6, 10));
			enumeratedQuestions[id] = true;
		}

		//Set the total questions to the enum q length
		totalQuestions = enumeratedQuestions.length - 1;
		console.log(totalQuestions)

		//Now, find the unanswered questions amount from the text
		var resultsAlertIndex = $(".resultsAlert").text().indexOf("of");
		var unansweredQuestions = parseInt($(".resultsAlert").text().substr(0, resultsAlertIndex));

		var text = $(".scoreSummary p").text();
		var begin = text.indexOf("of") + 3;
		var end = text.indexOf("%");
		var scorePercent = parseInt(text.substr(begin, end-begin));

		var result = Math.round(totalQuestions * (scorePercent / 100));
	
		if (!isNaN(result)) {
			//Iffy math
			var possibleQuestions = totalQuestions - result;
			console.log("and the possible questions are " + possibleQuestions)
			var wrongQuestions = possibleQuestions - unansweredQuestions;
			console.log("which means the wrong questions are " + wrongQuestions)
			$(".resultsAlert").append("<br>Questions wrong: " + wrongQuestions + " out of the " + (totalQuestions - unansweredQuestions) + " answered.");
		}		
}



//magic?
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