const plantLifeStatus = Number(process.argv[2]);
const plantDryness = Number(process.argv[3]);

if(plantLifeStatus == 0 && plantDryness > 10)
{
    console.log("WATER");
}