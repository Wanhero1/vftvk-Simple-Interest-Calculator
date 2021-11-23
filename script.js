//Calculate the amount to be displayed and define the output message
function compute()
{
    var principal = document.getElementById("principal").value;  //Get all the data required from document
    if (parseFloat(principal) <= 0 || principal == "")
    {
        //Returns an error if amount inserted is negative or not inserted
        alert("Enter a positive number")
        document.getElementById("principal").focus()
    }
    else{
        var rate = document.getElementById("rate").value;
        var years = document.getElementById("years").value;

        var interest = principal * years * rate /100; //Determine interest
        var year = new Date().getFullYear()+parseInt(years); //Determine the correct year
        var amount =  parseFloat(interest).toFixed(2) //Calculate the amount (rounded to 2 decimal cyphers)
        
        //Set the message to be displayed
        var result = document.getElementById("result")
        result.innerHTML = "If you deposit "  + principal +",\<br/\>at an interest rate of "+rate+"%\<br\>You will receive an amount of "+amount+",\<br\>in the year "+year+"\<br\>"
    }
}

function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval+"%";
}