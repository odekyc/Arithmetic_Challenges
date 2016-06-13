function telephoneWords (digitString) {
  // Write your code here, and
  // return your final answer.
  
  var result_arr=[''];
  
  var recurse=function(digit){
    var new_arr=[];
    var j;
    for(j=0; j<result_arr.length; j++){
      if(digit==='0'){
        console.log(result_arr[j]);
        new_arr.push(result_arr[j]+'0');
        console.log(new_arr);
      }
      else if(digit==='1'){
          new_arr.push(result_arr[j]+'1');
      }
       else if(digit==='2'){
          new_arr.push(result_arr[j]+'A');
          new_arr.push(result_arr[j]+'B');
          new_arr.push(result_arr[j]+'C');
      }
      else if(digit==='3'){
        new_arr.push(result_arr[j]+'D');
        new_arr.push(result_arr[j]+'E');
        new_arr.push(result_arr[j]+'F');
      }
        else if(digit==='4'){
        new_arr.push(result_arr[j]+'G');
        new_arr.push(result_arr[j]+'H');
        new_arr.push(result_arr[j]+'I');
      }
        else if(digit==='5'){
        new_arr.push(result_arr[j]+'J');
        new_arr.push(result_arr[j]+'K');
        new_arr.push(result_arr[j]+'L');
      }
      else if(digit==='6'){
        new_arr.push(result_arr[j]+'M');
        new_arr.push(result_arr[j]+'N');
        new_arr.push(result_arr[j]+'O');
      }
       else if(digit==='7'){
        new_arr.push(result_arr[j]+'P');
        new_arr.push(result_arr[j]+'Q');
        new_arr.push(result_arr[j]+'R');
        new_arr.push(result_arr[j]+'S');
      }
        else if(digit==='8'){
        new_arr.push(result_arr[j]+'T');
        new_arr.push(result_arr[j]+'U');
        new_arr.push(result_arr[j]+'V');
      }
      
      else if(digit==='9'){
        new_arr.push(result_arr[j]+'W');
        new_arr.push(result_arr[j]+'X');
        new_arr.push(result_arr[j]+'Y');
        new_arr.push(result_arr[j]+'Z');
      }
    }
    console.log('new_arr',new_arr);
    result_arr=new_arr;
  };
  
  var i;
  for(i=0; i<digitString.length; i++){
      recurse(digitString[i]);
  }
  return result_arr;
};