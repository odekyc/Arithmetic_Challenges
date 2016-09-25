var bubbleSort = function(array) {
  
  //both iterative and recursive solution
    var recurse = function (i) {
      if (i >= array.length) {
         return;
      }
      else if(i+1>=array.length){
        
      }
      else {
         if (array[i] <= array[i + 1]) {

         }
         else {
            temp=array[i];
            array[i]=array[i+1];
            array[i+1]=temp;
         }
         recurse(i + 1);
      }
   };
   recurse(0);
   return array;
 
  // var i;
  // var len=array.length;
  // var result=[];
  // for(i=0; i<len; i++){
  //   if(i+1>=len){
  //     result.push(array[i]);
  //   }
  //   else{
  //     if(array[i]<=array[i+1]){
  //       result.push(array[i],array[i+1]);
  //     }
  //     else{
  //       result.push(array[i+1],array[i]);
  //     }
  //   }
  // }
  // return result;
};
