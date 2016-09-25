var compose = function(){
  var args=Array.prototype.slice.call(arguments);
  return function(){
    var args1=Array.prototype.slice.call(arguments);
    var i;
    for(i=args.length-1; i>=1; i--){

      var resultArgs1=args[i].apply(this,args1);
    }
    return args[0].call(this,resultArgs1);
  }
};

var pipe = function(){
  //Your code here 
  var args=Array.prototype.slice.call(arguments);
  return function(){
    var args1=Array.prototype.slice.call(arguments);
    var i;
    for(i=0; i<args.length-1; i++){
      var resultArgs1=args[i].apply(this,args1);
    }
    return args[args.length-1].call(this,resultArgs1);
  }
};