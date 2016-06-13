
function insertionSort (array) {
  // Write your code here, and
  // return your final answer.
  var sorted=[];
  var i;
 while(array.length>0){
   var value=array[0];
   array.shift();
   if(sorted.length===0){
     sorted.push(value);
   }
   else if(sorted.length===1){
       if(sorted[0]<=value){
            sorted.push(value);
       }
       else{
           sorted.splice(0,0,value);
       }
 }
 else{
     console.log(sorted);
     for(var i=1; i<sorted.length; i++){
         if(i===1){
             if(value<sorted[0]){
                 sorted.splice(0,0,value);
             }
         }
         
         if(i===sorted.length-1){
            if(sorted[i]<value){
                sorted.push(value);
             }
          }
        if((sorted[i-1]<value)&&(value<sorted[i])){
            sorted.splice(i,0,value);
        }
         
     
     }
 }
 }
 
  return sorted;
};