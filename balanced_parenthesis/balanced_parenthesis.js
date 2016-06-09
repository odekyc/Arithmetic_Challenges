function isBalanced (string) {
  // Write your code here, and
  // return your final answer.
  var i;
  var openingBraces=[];
  for(i=0; i<string.length; i++){
    if(string[i]==='('){
      openingBraces.push('(');
    }
    if(string[i]===")"){
      openingBraces.splice(openingBraces.length-1,1);
    }
  }
  if(openingBraces.length===0){
    return true;
  }
  return false;
};
