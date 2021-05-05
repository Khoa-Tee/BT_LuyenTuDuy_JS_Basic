var arrRealNumber = [1, 2, 5, 5, 20, -10, 5, 30];
console.log("arrRealNumber = ", arrRealNumber);

var x = arrRealNumber[2];
function countX(arrRealNumber)
{
    var count = 0;
    var i;

    for(i = 0; i < arrRealNumber.length; ++i) 
    {
        if(arrRealNumber[i] == x)
        {
            ++count;
        }
    }
    return count;
}

console.log("x = ", x);
console.log("Frequency Occurrence of x = ", x, " is ", countX(arrRealNumber), " times");


      