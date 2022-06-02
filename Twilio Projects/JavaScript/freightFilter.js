function scanAndFilter(strings, filterString){

    let resultArray = [];

    strings.forEach(string =>{
        if(string != filterString){
            resultArray.push(string);
        }
    });

    return resultArray;
}