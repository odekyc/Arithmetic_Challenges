function numberToEnglish (number) {
  // Write your code here, and
  // return your final answer.
var numbersToWords = {
  0: 'zero',
  1: 'one',
  2: 'two',
  3: 'three',
  4: 'four',
  5: 'five',
  6: 'six',
  7: 'seven',
  8: 'eight',
  9: 'nine',
  10: 'ten',
  11: 'eleven',
  12: 'twelve',
  13: 'thirteen',
  14: 'fourteen',
  15: 'fifteen',
  16: 'sixteen',
  17: 'seventeen',
  18: 'eighteen',
  19: 'nineteen',
  20: 'twenty',
  30: 'thirty',
  40: 'forty',
  50: 'fifty',
  60: 'sixty',
  70: 'seventy',
  80: 'eighty',
  90: 'ninety', 
};


 

 var num_length=String(number).length;
 
 var num_str=String(number);
 
 var all_zero=false;
 var num_zeros;
 var zeros_start;
 
 for(var j=0; j<num_length; j++){
    if(num_str[j]==='0'){
        var zero_digits=num_str.slice(j);
        num_zeros=num_length-j;
        var test_zeros='0'.repeat(num_zeros);
        if(zero_digits===test_zeros){
            all_zero=true;
            zeros_start=num_length-j-1;
            break;
        }
        
    }
 }
 
 var reversed_numstr=num_str.split("").reverse().join("");
 
 
 var str="";
 
 if(num_length===1){
    return numbersToWords[number];
 }
 

 
 for(var i=0; i<num_length; i++){
    
  

  if(reversed_numstr[i]!=='0'){

    
   if(i===0){
     
        str+= numbersToWords[Number(reversed_numstr.charAt(i))];
     
   }
   else if(i===1){
     if(reversed_numstr[1]==='1'){
        var key_str='1'+reversed_numstr.charAt(0);
        str=numbersToWords[Number(key_str)];
     }
     else{
        if(reversed_numstr[0]==='0'){
                str=numbersToWords[Number(reversed_numstr.charAt(1)+'0')];
        }
        else{
        str=numbersToWords[Number(reversed_numstr.charAt(1)+'0')]+'-'+str;
        }   
     }
   }
   else if(i===2){
        if(str===''){
            str=numbersToWords[Number(reversed_numstr.charAt(2))]+" hundred";
        }
        else{
          str=numbersToWords[Number(reversed_numstr.charAt(2))]+' hundred'+' '+str;
        }
   }
   else if(i===3){
      
          str=numbersToWords[Number(reversed_numstr.charAt(3))]+' thousand'+' '+str;
      

   }
    else if(i%3===1){
        var quantity_str;
        if(i===4){
            quantity_str="thousand";
        }
        if(i===7){
            quantity_str="million";
        }
        else if(i===10){
            quantity_str="billion";
        }
        else if(i===13){
            quantity_str="trillion";
        }
         else if(i===16){
            quantity_str="quadrillion";
        }
        else if(i>=19){
            quantity_str="quintillion";
        }
        
        if(reversed_numstr.charAt(i)==='1'){
            var key_str='1'+reversed_numstr.charAt(i-1);
            var quantity_index=str.indexOf(quantity_str);
            str=str.slice(quantity_index);
        
            str=numbersToWords[Number(key_str)]+' '+str;
            
        }
        else{
            if(reversed_numstr.charAt(i-1)==='0'){
                str=numbersToWords[Number(reversed_numstr.charAt(i)+'0')]+' '+str;
            }
            else{
              str=numbersToWords[Number(reversed_numstr.charAt(i)+'0')]+'-'+str;
            }

        }
     
   }
    else if(i%3==2){
        
        str=numbersToWords[Number(reversed_numstr.charAt(i))]+' hundred '+str;
    }
    
     else if(i%3===0){
        var quantity_str;
        if(i===6){
            quantity_str="million";
        }
        else if(i===9){
            quantity_str="billion";
        }
        else if(i===12){
            quantity_str="trillion";
        }
         else if(i===15){
            quantity_str="quadrillion";
        }
        else if(i===18){
            quantity_str="quintillion";
        }
        if(str===''){
            str=numbersToWords[Number(reversed_numstr.charAt(i))]+" "+quantity_str;
        }
        else{
            str=numbersToWords[Number(reversed_numstr.charAt(i))]+' '+quantity_str+' '+str;
        }
     }


  }
  else{
    if((all_zero===false)||((all_zero===true)&&(i!==zeros_start))){
  
        if(i===3){
            str="thousand "+str;
        }
        else if(i===6){
            str="million "+str;
        }
        else if(i===9){
            str="billion "+str;
        }
        else if(i===12){
            str="trillion "+str;
        }
        else if(i===15){
            str="quadrillion "+str;
        }
        else if(i===18){
            str="quintillion "+str;
        }
    }
    
    if((all_zero===true)&&(i===zeros_start)){
        if(i>=5){
            str="";
        }
        
        if(i===3){
            str="thousand "+str;
        }
        else if(i===6){
            str="million "+str;
        }
        else if(i===9){
            str="billion "+str;
        }
        else if(i===12){
            str="trillion "+str;
        }
        else if(i===15){
            str="quadrillion "+str;
        }
        else if(i===18){
            str="quintillion "+str;
        }
    }
  }
  
  
  
  
 }
 
 if(str[str.length-1]===' '){
    str=str.slice(0, str.length-1);
 }

 
 return str;
};