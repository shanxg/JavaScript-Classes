const argValue = process.argv[2];
const numValeu = Number(argValue);

if ((numValeu % 3) == 0 && (numValeu % 5) == 0)
{
        console.log("JavaScript");
}
else if ((numValeu % 3) == 0)
{ 
        console.log("Java");
}
else if ((numValeu % 5) == 0)
{
        console.log("Script");
}
else // ((numValeu % 3 != 0) && (numValeu % 5 != 0)):
{
        console.log(""+argValue); 
}