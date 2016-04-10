function longestRun (string) {
  // Write your code here, and
  // return your final answer.
 string=string.toLowerCase();
  var i;
  var firstKey=string[0];
   var runCounts={};
   runCounts[firstKey]=[1,0,0];
   var maxCountsObj={};
   maxCountsObj[firstKey]=[1,0,0];
   var maxCounts=1;
   var output=[];
  for(i=1; i<string.length; i++){
    var char=string[i];
     if(!runCounts.hasOwnProperty(char)){
       runCounts[char]=[1,i,i];
     }
     else{
       if(string[i-1]===char){
         
       runCounts[char][0]+=1;
       runCounts[char][2]=i;
       }
       else{
         for(var key in runCounts){
           if(runCounts[key][0]>maxCounts){
             maxCounts=runCounts[key][0];
             maxCountsObj={key: runCounts[key]};
           }
         }
         runCounts[char]=[1,i,i];
       }
     }
  }
   for(var key in runCounts){
       console.log(key);
      if(runCounts[key][0]>maxCounts){
          
      maxCounts=runCounts[key][0];
      
      maxCountsObj={key: runCounts[key]};
    }
   }
    var maxKey=Object.keys(maxCountsObj)[0];
  output.push(maxCountsObj[maxKey][1],maxCountsObj[maxKey][2]);
  return output;
  };
  