var a = 10;
var b = 10;
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
if (a == b && b == c)
{
    console.log("Three equal numbers with a = b = c = ", a);
}
else
{
    console.log("The biggest number is: ", whichIsTheBiggestNumber);
}


