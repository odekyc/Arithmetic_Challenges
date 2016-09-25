function evenOccurence (arr) {
  // Write your code here, and
  // return your final answer.
  var evenOcurItem=null;
  var ocurArr=[];
  var itemArr=[];
  var i;
  for(i=0; i<arr.length; i++){
   var index=itemArr.indexOf(arr[i]);
   if(index===-1){
     itemArr.push(arr[i]);
     ocurArr.push([arr[i],1]);
     
   }
   else{
     ocurArr[index][1]+=1;
   }
  }
  
   var j;
   for(j=0; j<ocurArr.length; j++){
     if((ocurArr[j][1]%2===0)&&(ocurArr[j][1]!==0)){
       evenOcurItem=ocurArr[j][0];
       return evenOcurItem;
     }
   }
   
   return evenOcurItem;

};