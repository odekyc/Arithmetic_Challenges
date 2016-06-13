function firstNonRepeatedCharacter (string) {
    // Write your code here, and
    // return your final answer.
    var i;
    var arr=string.split("");
    var result;
    var firstChar=arr[0];
    var counter=0;
    for(i=0;i<arr.length; i++) {
        if(firstChar===arr[i])
           counter++;
        var newarr1=arr.slice(0,i);
        var newarr2=arr.slice(i+1);
        var newarr=newarr1.concat(newarr2);
        if (newarr.indexOf(arr[i]) === -1) {
            result = arr[i];
            break;
        }

    }
    if(counter===arr.length)
        return "sorry";
    return result;
};