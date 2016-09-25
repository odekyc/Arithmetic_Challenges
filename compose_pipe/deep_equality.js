
deepEquals = function(a, b){
   var aKeyLen=Object.keys(a).length;
   var bKeyLen=Object.keys(b).length;
   var nestObjResult=false;
   var enterRecurse=false;

   if(aKeyLen!==bKeyLen){
      return false;
   }

   var recurse=function(aObjVal,bObjVal){


      var aLen=Object.keys(aObjVal).length;
      var bLen=Object.keys(bObjVal).length;
      if(aLen!==bLen){
         return;
      }
      for(var key1 in aObjVal){

         if(!bObjVal.hasOwnProperty(key1)){
            return;
         }
         else{

            if((typeof aObjVal[key1]==='object')&&(typeof bObjVal[key1]==='object')){

               recurse(aObjVal[key1],bObjVal[key1]);
            }
            else {
               if (aObjVal[key1] !== bObjVal[key1]) {
                  return;
               }
            }
         }

      }
     
      nestObjResult=true;
      return;

   };


   for(var key in a){
      if(!b.hasOwnProperty(key)){
         return false;
      }
      else{
         if((typeof a[key]==='object')&&(typeof b[key]==='object')){
            recurse(a[key],b[key]);
            enterRecurse=true;
         }
         else {
            if (a[key] !== b[key]) {
               return false;
            }
         }
      }
   }
   if(enterRecurse===true){
     return nestObjResult;
   }
   return true;

   

};