
function largestProductOfThree (array) {
   // Write your code here, and
   // return your final answer.
   array.sort(function(a, b){return a-b});
   var largest3Nums1=[];
   var largestProduct;
   var largestProduct1;
   var largestProduct2;
   if(array[1]<0){
     largest3Nums1.push(array[0],array[1],array[array.length-1]);
     var largest3Nums2=[array[array.length-1],array[array.length-2],array[array.length-3]];
     largestProduct1=largest3Nums1[0]*largest3Nums1[1]*largest3Nums1[2];
     var largestProduct2=largest3Nums2[0]*largest3Nums2[1]*largest3Nums2[2];
     if(largestProduct1>largestProduct2){
       largestProduct=largestProduct1;
     }
     else{
       largestProduct=largestProduct2;
     }
   }
   else{
     var largest3Nums=[array[array.length-1],array[array.length-2],array[array.length-3]];
     largestProduct=largest3Nums[0]*largest3Nums[1]*largest3Nums[2];
   }
   
   
   return largestProduct;
}
