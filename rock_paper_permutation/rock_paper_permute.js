
function rockPaperPermutation (roundCount) {
  // Write your code here, and
  // return your final answer.
  if(roundCount===0){
    return [];
  }
  var play=['r','p','s'];
  
  var outcome=[];
  
  var recurse=function(roundLeft, pattern){
    if(roundLeft===0){
      outcome.push(pattern);
      return;
    }
    
       var i;
  for(i=0; i<3; i++){
    pattern+=play[i];
    recurse(roundLeft-1,pattern);
    pattern=pattern.slice(0,-1);
  }
  };

  recurse(roundCount,'');
  return outcome;
};