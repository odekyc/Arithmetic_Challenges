function pairwise(arr, arg) {
  var pairs=[];
  for( var i=0; i<arr.length; i++){
    for( var j=i+1; j<arr.length; j++){
      if( arr[i]+arr[j]===arg){
        pairs.push([i,j]);
      }
    }
  }
  var indices_sum=0;
  
  for( var a=0; a<pairs.length; a++){
    indices_sum+=pairs[a][0]+pairs[a][1];
  }
  
  return indices_sum;
}