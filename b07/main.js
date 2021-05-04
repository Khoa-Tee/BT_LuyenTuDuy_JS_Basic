var a = 9;
var b = 8;
var c = 10;

function findMax(x, y, z)
{
    var max = x;

    if(max < y)
    {
        max = y;
    }
    if(max < z)
    {
        max = z;
    }

    return max;
}

findMax();
var whichIsTheBiggestNumber = findMax(a, b, c);
console.log("The biggest number is: ", whichIsTheBiggestNumber);

