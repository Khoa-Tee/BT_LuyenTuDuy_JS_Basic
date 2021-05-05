var arrRealNumber = [1.2, -2.5, -10, 20, 0.5, 15];
console.log("arrRealNumber = ", arrRealNumber);

function minIntegerNumber(arrRealNumber)
{
    var min = arrRealNumber[0];
    var i;

    for(i = 1; i < arrRealNumber.length; i++)
    {
        if(arrRealNumber[i] > 0)
        {
            if(min > arrRealNumber[i])
            {
                min = arrRealNumber[i];
            }
        }
    }
    return min;
}

function maxIntegerNumber(arrRealNumber)
{
    var max = arrRealNumber[0];
    var i;

    for(i = 1; i < arrRealNumber.length; i++)
    {
        if(arrRealNumber[i] > 0)
        {
            if(max < arrRealNumber[i])
            {
                max = arrRealNumber[i];
            }
        }
    }
    return max;
}

console.log("Min Integer Number is: ", minIntegerNumber(arrRealNumber));
console.log("Max Integer Number is: ", maxIntegerNumber(arrRealNumber));