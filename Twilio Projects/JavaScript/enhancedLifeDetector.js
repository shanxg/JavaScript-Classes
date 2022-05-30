const argumentValue = process.argv[2];
const statusID = Number(argumentValue);

if(statusID == 0)
{
console.log("alive");
}
else if(statusID == 1)
{
    console.log("flowering");
}
else if(statusID == 2)
{
    console.log("shedding");
}
else
{
    console.log("other");
}