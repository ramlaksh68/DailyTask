var text=`kvvfl kvvfl olud wjqsqa olud frc
slhm rdfm yxb rsobyt rdfm
cgc jazrp crgnna uvuokl uvuokl uoiwl sknmc sknmc
rvbu czwpdit vmlihg spz lfaxxev zslfuto oog dvoksub`;
isHaveDubWord(text);
function isHaveDubWord(text){

   let grp=text.split(/\n/);
   var result= grp.reduce((sum,sntnce)=>{
      var wrdsAry=sntnce.split(/\s/);
      var afterdubrmv=[...new Set(wrdsAry)];
      sum+=(afterdubrmv.length==wrdsAry.length)?1:0;
     return sum;
   },0);
   
     console.log(result)
 }
