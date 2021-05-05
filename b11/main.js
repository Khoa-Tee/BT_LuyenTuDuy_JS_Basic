var arrRealNumber = [1.2, -2.5, -10, 20, 1.2, -10, -10.2, 21.4];
console.log("arrRealNumber = ", arrRealNumber);

function minIntegerNumber(arrRealNumber)
{
    var min = arrRealNumber[0];
    var i;

    for(i = 1; i < arrRealNumber.length; i++)
    {
        if(min > arrRealNumber[i])
        {
            min = arrRealNumber[i];
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
        if(max < arrRealNumber[i])
        {
            max = arrRealNumber[i];
        }
    }
    return max;
}

console.log("[", Math.floor(minIntegerNumber(arrRealNumber)), ", ", Math.ceil(maxIntegerNumber(arrRealNumber)), "]");