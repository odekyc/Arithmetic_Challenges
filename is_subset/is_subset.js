
Array.prototype.isSubsetOf = function() {
    var args=arguments[0];
    var len=this.length;
    var i;
    var counter=0;
    console.log(args);
    for(i=0; i<len; i++){
        if(args.indexOf(this[i])>=0){
            counter++;
        }
    }
    if(counter===len){
        return true;
    }
    return false;
};