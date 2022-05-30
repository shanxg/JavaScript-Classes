const argString = process.argv[2];

function getLaserSetting(politeString)
{
    laserStatus = "ON";
    
    if(politeString == "please")
    {
        laserStatus = "OFF";
    }
    
    return laserStatus;
}