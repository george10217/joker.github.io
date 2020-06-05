

function setShirt() {       // Checks & outputs an alert to display the Pizza Make to either 'Classic', 'Legend' or 'Signature'
    if (document.Options.shirtSelected[0].checked == true) {
    }
    else if (document.Options.shirtSelected[1].checked == true) {
        }
else if (document.Options.shirtSelected[2].checked == true) {
        }

}

function getOptions(shirtSelected) {
    var list;
    var listValue;
   
        list = ["Standard ship","3 day","Overnight"];  // Creates an array called list populating it with pizza type
        listValue = [10,60,90];  // Creates an array called listValue populating it with pizza prices
    
    for (var i = 0; i < document.Options.shirtSelected.length; i++) {         //Clear the dropdown menu of old dropdown list
		document.Options.dList.options[i] = null;
	}
	for (var i = 0; i < list.length; i++) {                                     //Re-populates the dropdown menu with new dropdown list
		document.Options.dList.options[i] = new Option(list[i],listValue[i],0,0);
	
	}
}



function myDisplay(i) {
    document.getElementById("listValue").innerHTML = "$ " + i;
}

function appear(){
           $('#table').fadeIn(400);
}
