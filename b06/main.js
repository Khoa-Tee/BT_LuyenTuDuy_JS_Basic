var n = 11;
console.log("Input = ", n);

function primeNumber(x)
{
    if(x < 2)
    {
        return false;
    }

        for(i = 2; i <= x/2; i++)
        {
            if(x % i == 0)
            {
                return false;
            }
        }

    return true;
}

primeNumber();
var snt = primeNumber(n);
console.log(n ,"is a Prime Number ?", snt);