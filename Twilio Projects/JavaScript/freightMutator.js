function mutate(strings){

    var capsStrings = [];
    
    strings.forEach(string => {
        capsStrings.push(string.toUpperCase());
    });

    return capsStrings;
}