var Range = function(start, end, step) {
  //Your code here
  this.startI=start;
  this.endI=end;
  this.stepI=step;
  if(this.startI===undefined){
    return null;
  }
  if(this.endI===undefined){
    this.endI=start;
  }
   if(this.stepI===undefined){
     if(this.startI>this.endI){
       this.stepI=-1;
     }
     else{
       this.stepI=1;
     }
  }
};

Range.prototype.size = function () {
  //Your code here
  var len=0;
  var i;
  if(this.startI<=this.endI){
     for(i=this.startI; i<=this.endI; i+=this.stepI){
    len++;
  }
  }
  else{
     for(i=this.startI; i>=this.endI; i+=this.stepI){
    len++;
  }
  }
  return len;
};

Range.prototype.each = function (callback) {
  //Your code here
  
 if(this.startI<=this.endI){
    
    for(var j=this.startI; j<=this.endI; j+=this.stepI){
         callback(j);
  }
 }
 else if(this.startI>this.endI){
     console.log(this.stepI);
    for(var j=this.startI; j>=this.endI; j+=this.stepI){
          callback(j);
  }
 }
};

Range.prototype.includes = function (val) {
  //Your code here
   var j;
   var found=false;
 if(this.startI<=this.endI){
    for(j=this.startI; j<=this.endI; j+=this.stepI){
       if(j===val){
         found=true;
       }
  }
 }
 else{
    for(j=this.startI; j>=this.endI; j+=this.stepI){
     if(j===val){
         found=true;
       }
  }
 }
 return found;
};