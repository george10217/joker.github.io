
//*This allows the table to appear and the map to disappear on click through the application of jquery*//
function appear(){
           $('#table').fadeIn(1500);
           $('.info').fadeOut(500);
           ething();
}

function appear1(){
           $('#check').fadeIn(400);
}

function ething(){ //this is the main module that operates the code in the order presented
           appear1();//this makes the procced to checkout button appear
           calculateTotal();//this outputs the total cost of everything including the admin fee and shipping
           totaloptions();// this outputs the total cost of only the clothes
           totalshipping();
           
}

//creates an arrary for the all the radio buttons 
 var shirt_prices = new Array();
 shirt_prices["Shirt1"]=100;// this is the value of the button and then is declared to have a value in js instead of HTML
 shirt_prices["Shirt2"]=150;
 shirt_prices["Shirt3"]=180;
 shirt_prices["Noshirt"]=0;
 
 //calculates the shirt price through the form 
 function getShirtprice(){  
    var Shirtprice=0; //shirt price is assumed to be 0 
    var theForm = document.forms["Options"]; //value from the form is collected
    var selectedshirt = theForm.elements["shirtSelected"];
    for(var i = 0; i < selectedshirt.length; i++)// 'i' is a varialbe used in this function and then replaced as 'x' in the next one 
    {
        if(selectedshirt[i].checked) //the price is checked based on the condition 
        {
            Shirtprice = shirt_prices[selectedshirt[i].value];
            break; 
        }
    }
    return Shirtprice;
}

var pantprices = new Array();
 pantprices["Pant1"]=200;
 pantprices["Pant2"]=250;
 pantprices["Pant3"]=290;
 pantprices["Nopant"]=0;

//calculates the price of the pants through the array 
function getPantprice(){  
    var pantPrice=0;
    var theForm1 = document.forms["Options"];
    var selectedP = theForm1.elements["pantSelected"];
    for(var x = 0; x < selectedP.length; x++)//variable x is declared to calculate each 'pantprices'
    {
        if(selectedP[x].checked)
        {
            pantPrice = pantprices[selectedP[x].value];
            break;
        }
    }
    return pantPrice; //output for the pant price 
}


 var shipping_prices= new Array();
 shipping_prices["Stand"]=30;
 shipping_prices["threeday"]=50;
 shipping_prices["Onight"]=90;



function getshipprice(){ //gets the price of the shipping from the select tag 'dropdown list'
    var shipping=0;
    var theForm = document.forms["Options"];
     var selectedshipping = theForm.elements["dList"];

    shipping = shipping_prices[selectedshipping.value];

    return shipping; 

}

//calculates the total of everything
function calculateTotal(){
    var adminfee = 40; //this is the $40 required admin fee to buy things from the site
    var total = adminfee + getShirtprice() + getPantprice() + getshipprice(); // all the costs are added up including the admin fee variable
    

    var tnow = document.getElementById('totalPrice'); //outputs the total cost of purchase
    tnow.innerHTML = total;
}

function totaloptions(){
           var totatclothes = getShirtprice() + getPantprice();//instead of calculating the full cost, this calculates the cost of the clothes only 
           
           var options = document.getElementById('totaloption');
           options.innerHTML = totatclothes;
}

function totalshipping(){
           var totalshipped = getshipprice();//instead of calculating the full cost, this calculates the cost of the clothes only 
           
           var shippedp = document.getElementById('shippingoption');
           shippedp.innerHTML = totalshipped;
}
