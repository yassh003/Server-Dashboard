var a = 3;
var b = 11;
var c = a + b;

// Conditional Statements
if(c > 14)
{
    console.log("'c' is greater than 14")
}
else
{
    console.log("'c' is not greater than 14")
}

var j = 11;

for(var i=1; i<=10; i++)
{
    j--
    console.log("The value of i is: "+ i +" during the "+ i +"th iteration")
    console.log("The value of j is: "+ j +" during the "+ j +"th iteration")
}

function add()
{
    var a = 10;
    var b = 20;
    var c = a + b;
    alert(c)
}

add()

function multiply()
{
    var a = 6;
    var b = 8;
    var c = a * b;
    return c;
}

console.log(multiply())

function division(a,b)
{
    return a / b;
}

console.log(division(10, 2))
