function calculatePower(powerNumbers)
{
    var newPower = 0;

    powerNumbers.forEach(number =>
        {
            newPower += number*2;
        }
        );

    return newPower;
}