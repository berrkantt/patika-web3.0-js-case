var totalDigits = 0;
function oddishOrEvenish(number) 
{
    var output = [];
    var sNumber = number.toString();
        
        for (var i = 0, len = sNumber.length; i < len; i += 1) 
        {
            output.push(+sNumber.charAt(i));
            totalDigits = Number((sNumber[i])) + totalDigits;
        }

        if (totalDigits % 2 == 0) result = 'Even';
        
        else result = 'Odd';
    
return result;
}
console.log(oddishOrEvenish(1235));
