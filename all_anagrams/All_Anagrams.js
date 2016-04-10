function allAnagrams (string) {
  // Write your code here, and
  // return your final answer.
  var splited=string.split('');
  
  var result_arr=[];
  
  var recurse=function(pattern, priorindexstr){
    
    if(pattern.length===splited.length){

      if(result_arr.indexOf(pattern)===-1){
         result_arr.push(pattern);
         return;
      }
    }
    
    for(var i=0; i<splited.length; i++){
   
   
        if(priorindexstr.indexOf(String(i))===-1){
                
         recurse(pattern+splited[i], priorindexstr+String(i));
        }
    }
  
  };
  
  recurse('', '');
  
  return result_arr;
};
