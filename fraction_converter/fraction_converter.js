function fractionConverter (number) {
  // Write your code here, and
  // return your final answer.
  if(number===0){
    return 0+'/'+1;
  }
  console.log(number);
  var isNeg=false;
  if(number<0){
    isNeg=true;
  }
  var periodIndex=String(number).indexOf('.');
  console.log(periodIndex);
  var decimals=String(number).slice(periodIndex+1);
  
  number=Math.abs(number);
  var numDecimals=decimals.length;
  var denom=Math.pow(10,numDecimals);
  var nom=Math.floor(number*Math.pow(10,numDecimals));

  var i;
  var gcd=1;
  for(i=nom; i>0; i--){
    if((nom%i===0)&&(denom%i===0)){
      gcd=i;
      break;
    }
  }
  nom=nom/gcd;
  denom=denom/gcd;
  
 if(isNeg){
   return '-'+nom+'/'+denom;
 }
  return nom+'/'+denom;
};