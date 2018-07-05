var data='38934458354297226785584563175638938617524555425883';
calculateMatchedNumber(data); //////// Pass Input Here.

function calculateMatchedNumber(data){
    var part1=(""+data).split("");
    var part2=part1.splice(part1.length/2)
   var result= part1.reduce((sum,no,ind)=>{
        if(no==part2[ind])sum+=(no*2)
        return sum
    },0)
console.log(result);
}
