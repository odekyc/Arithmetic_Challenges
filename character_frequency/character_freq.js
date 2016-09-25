function characterFrequency (string) {
  // Write your code here, and
  // return your final answer.
  if (string.length===0){
    return [];
  }
  
  var result_arr=[];
  var myobj={};
  var i;
  for(i=0; i<string.length; i++){
    if(!myobj.hasOwnProperty(string[i])){
      myobj[string[i]]=1;
    }
    else{
      myobj[string[i]]+=1;
    }
  }    

  
 for(var prop in myobj){
     var new_arr=[prop, myobj[prop]];
     result_arr.push(new_arr);
 }  

 result_arr.sort(function(a,b){ return b[1]-a[1]; 
 });
 
 var num=null;
 var result_arr2=[];
 var temp_arr=[];
 
 for(var j=0; j<result_arr.length; j++){
     if(num!==result_arr[j][1]){
         num=result_arr[j][1];
         temp_arr.sort();
         for(var p=0; p<temp_arr.length; p++){
             result_arr2.push(temp_arr[p]);
         }
         temp_arr=[];
     }
     temp_arr.push(result_arr[j]);
     
 }
 temp_arr.sort();
 
 for(var p=0; p<temp_arr.length; p++){
    result_arr2.push(temp_arr[p]);
}
 
 return result_arr2;
  
};