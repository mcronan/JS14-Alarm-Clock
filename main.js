$(function(){

	var outerShell = $('<div class="outer-shell"></div')
	var innerShell = $('<div class="inner-shell"></div')
	outerShell.append(innerShell);
	$('body').append(outerShell);

	var label = $('<div class="label"></div>')
	innerShell.append(label);
	
	var clockScreen = $('<div class="clockScreen"></div>')
	innerShell.append(clockScreen);
	
	var time = $('<div class="time"</div>')
	clockScreen.append(time);

	var indicator = $('<div class="indicator"</div>')
	clockScreen.append(indicator);
	
	var amLabel = $('<div class="amLabel"</div>')
	var fmLabel = $('<div class ="fmLabel"</div>')
	innerShell.append(amLabel)
	innerShell.append(fmLabel)

	//add text to inner shell
	amLabel.text('AM 53 60 70 90 110 140 170')

	//add text to inner shell
	fmLabel.text('FM 88 92 94 96 98 100 102')

    // add time 
	time.text("12 17")

	// add indicator
	indicator.text(":")

	// add AM/PM
	label.text("PM Auto")


	}








});