function calculateMass(strings){
    
    var stringsWeight = 0;
    strings.forEach(string =>{
        stringsWeight += string.length;
    });

    return stringsWeight;
}