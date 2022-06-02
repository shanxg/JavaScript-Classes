function scan(strings){
    let indexes = [];

   for(var i=0; i<strings.length; i++){
        var string = strings[i];

        if(string == 'contraband'){
            
            indexes.push(i);
        }
    }

    return indexes;
}