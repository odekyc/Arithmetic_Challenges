function powerSet (string) {
   // Write your code here, and
  // return your final answer.
  var arr=string.split('');
  arr.sort();
  
  var result=[""];
  
  var makeSubset=function(str){
      if(str.length===string.length){
          return;
      }
      var i;
      for(i=0; i<arr.length; i++){
        if(str.indexOf(arr[i])===-1){
            str+=arr[i];
            tempArr=str.split('');
        tempArr.sort();
        str1=tempArr.join('');
        if(result.indexOf(str1)===-1){
          result.push(str);
          
        }
        makeSubset(str);
        str=str.slice(0,str.length-1);
        }
       else{
           continue;
       }
      }
  };
  makeSubset('');
  return result;
};