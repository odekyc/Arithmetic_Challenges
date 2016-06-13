
nthFibonacci = function(n) {
    var secondToLastNum=0;
    var lastNum=1;
    var fibonum=1;
    if(n===0){
        return 0;
    }
    else if(n===1){
        return 1;
    }
    for(var i=3; i<n+1; i++){
        var temp=fibonum+lastNum;
        secondToLastNum=lastNum;
        lastNum=fibonum;
        fibonum=temp;

    }
    return fibonum;

};