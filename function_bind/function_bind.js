var bind = function(func, context){
 //Your code here
   var args=Array.prototype.slice.call(arguments,2);
  return function(){
    //Your code here
    var args2=Array.prototype.slice.call(arguments);
    var args3=args.concat(args2);
   return func.apply(context,args3); 
  }
};  

Function.prototype.bind = function(context) {
  //Your code here  
  var args=Array.prototype.slice.call(arguments,1);
  var self=this;
  return function(){
    //Your code here
     var args2=Array.prototype.slice.call(arguments);
    var args3=args.concat(args2);
     return self.apply(context,args3); 
  }
};