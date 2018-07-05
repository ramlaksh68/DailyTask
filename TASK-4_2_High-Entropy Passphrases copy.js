var text=`kvvfl kvvfl olud wjqsqa olud frc
slhm rdfm yxb rsobyt rdfm
pib wzfr xyoakcu zoapeze rtdxt rikc jyeps wdyo hawr xyoakcu hawr`;
isHaveDubWord(text); /// Pass Your Input Here
function isHaveDubWord(text){

   let grp=text.split(/\n/);
   var result= grp.reduce((sum,sntnce)=>{
      var wrdsAry=sntnce.split(/\s/).map((wrd)=>{
          return wrd.split("").sort().join("");
      });
      var afterdubrmv=[...new Set(wrdsAry)];
      sum+=(afterdubrmv.length==wrdsAry.length)?1:0;
     return sum;
   },0);
   
     console.log(result)
 }
