function scan(strings){
    let contrabandTime = 0;
    strings.forEach(string => {
        if(string == "contraband"){
            contrabandTime ++;
        }
    })

    return contrabandTime;
}