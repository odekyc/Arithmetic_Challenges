function rotateMatrix (matrix) {
  // Write your code here, and
  // return your final answer.
  var result=[];
  for(var col=0; col<matrix.length; col++){
    var tempArr=[];
    for(var row=matrix.length-1; row>=0; row--){
      tempArr.push(matrix[row][col]);
    }
    result.push(tempArr);
  }
  return result;
};
