commonCharacters = function(string1, string2){
    var result=[];
    var i;

    for(i=0; i<string1.length; i++){
        if((string2.indexOf(string1[i])>-1)&&(result.indexOf(string1[i])===-1)){
            if(string1[i]!==" ") {
                result.push(string1[i]);
            }
        }
    }
    var resultStr=result.join("");
    return resultStr;
};