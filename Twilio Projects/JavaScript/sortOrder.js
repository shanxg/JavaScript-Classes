const firstArg = process.argv[2].toLowerCase();
const secArg = process.argv[3].toLowerCase();


if (firstArg < secArg)
{
    console.log("-1");
}
else if (firstArg > secArg)
{
    console.log("1");
}
else
{
    console.log("0");
}