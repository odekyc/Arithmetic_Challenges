function spiralTraversal (matrix) {
  // Write your code here, and
  // return your final answer.
  var row_num=matrix.length;
  var col_num=matrix[0].length;
  var num_of_elements=row_num*col_num;
  
  var row_mid=Math.round((row_num-1)/2);
  var col_mid=Math.round((col_num-1)/2);

  var result_arr=[];
  
  console.log(num_of_elements);
  
  for(var r=0; r<=row_mid; r++){

       if(r<row_mid){
        for( var c=r; c<col_num-r; c++){
           result_arr.push(matrix[r][c]);   
        }
        
        for(var r1=r+1; r1<row_num-r-1; r1++){
            
            result_arr.push(matrix[r1][col_num-r-1]);
        }
        
        for(var c1=col_num-1-r; c1>=r; c1--){
            result_arr.push(matrix[row_num-r-1][c1]);
        }
         if(result_arr.length===num_of_elements){
            break;
         }
         
        for( var r2=row_num-r-2; r2>=r+1; r2--){
            result_arr.push(matrix[r2][r]);
        }
      
      }
   
      
      else if(r===row_mid){
        for(var c=r; c<col_num-r; c++){
           result_arr.push(matrix[r][c]);   
        }
      }
      
     
      
  }
  
  return result_arr;
};