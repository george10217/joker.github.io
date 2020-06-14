
//*This allows the table to appear and the map to disappear on click through the application of jquery*//
function appear(){
           $('#table').fadeIn(1500);
           $('.info').fadeOut(500);
}

function appear1(){
           $('#check').fadeIn(400);
}

function ething(){
           appear1();
           calculateTotal();
           totaloptions();
           totalshippingcost();
           
}


 var shirt_prices = new Array();
 shirt_prices["Shirt1"]=100;
 shirt_prices["Shirt2"]=150;
 shirt_prices["Shirt3"]=180;
 shirt_prices["Noshirt"]=0;
 
 function getShirtprice(){  
    var Shirtprice=0;
    var theForm = document.forms["Options"];
    var selectedshirt = theForm.elements["shirtSelected"];
    for(var i = 0; i < selectedshirt.length; i++)
    {
        if(selectedshirt[i].checked)
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

function getPantprice(){  
    var pantPrice=0;
    var theForm1 = document.forms["Options"];
    var selectedP = theForm1.elements["pantSelected"];
    for(var x = 0; x < selectedP.length; x++)
    {
        if(selectedP[x].checked)
        {
            pantPrice = pantprices[selectedP[x].value];
            break;
        }
    }
    return pantPrice;
}


 var shipping_prices= new Array();
 shipping_prices["None"]=0;
 shipping_prices["Stand"]=30;
 shipping_prices["threeday"]=50;
 shipping_prices["Onight"]=90;



function getshipprice(){
    var shipping=0;
    var theForm = document.forms["Options"];
     var selectedshipping = theForm.elements["dList"];

    shipping = shipping_prices[selectedshipping.value];

    return shipping;

}


function calculateTotal(){
    var adminfee = 40;
    var total = adminfee + getShirtprice() + getPantprice() + getshipprice();
    

    var tnow = document.getElementById('totalPrice');
    tnow.innerHTML = total;
}

function totaloptions(){
           var totatclothes = getShirtprice() + getPantprice();
           
           var options = document.getElementById('totaloption');
           options.innerHTML = totatclothes;
}


