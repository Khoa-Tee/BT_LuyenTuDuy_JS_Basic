var arrayInteger = [0, -1, 1, -2, -3, 5, 6, 20, 26, -97, 99, 100];

function largestNumber(arrayInteger) 
{
    var max = arrayInteger[0];
    var i;

    for(i = 1; i < arrayInteger.length; i++)
    {
        if(arrayInteger[i] > max)
        {
            max = arrayInteger[i];
        }
    }
    return max;
}


console.log("Largest Number is: ", largestNumber(arrayInteger));


/*----------------- Method 2 -----------------
var result = largestNumber(arrayInteger);
console.log("Largest Number is: ", result); 
 */