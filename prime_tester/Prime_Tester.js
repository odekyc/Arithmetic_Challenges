function primeTester (n) {
  // Write your code here, and
  // return your final answer.
  var i;
  var limit=Math.sqrt(n);
  if(n===1){
    return false;
  }
  for(i=2; i<=limit; i++){
    if(n%i===0){
      return false;
    }
  }
  
  return true;
  
};