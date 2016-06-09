function binarySearch (array, target) {
  // Write your code here, and
  // return your final answer.
  var lastInd=array.length-1;
  var targetInd=-1;
  var recurse=function(startInd, endInd){
  
    var midInd=Math.round((startInd+endInd)/2);
    if(array[midInd]===target){
      targetInd=midInd;
      return;
    }
    else if(midInd===0){
      return;
    }
    else if(array[midInd]>target){
      recurse(0,midInd-1);
    }
     else if(array[midInd]<target){
      recurse(midInd+1,endInd);
    }
  };
  recurse(0,lastInd);
  return targetInd;
};