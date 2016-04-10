function longestPalindrome (string) {
  // Write your code here, and
  // return your final answer.
  
  var result_arr=[];
  
  for(var i=0; i<string.length; i++){
    for( var j=string.length-1; j>i; j--){
        if(string[i] === string[j]){
            var spliced_str=string.slice(i,j+1);
            var reversed_str=spliced_str.split("").reverse().join("");
        
            if(spliced_str===reversed_str){
                result_arr.push(spliced_str);
            }
            
        }
    }
    
  }
  return result_arr.sort(function(a,b){return b.length - a.length})[0];
};