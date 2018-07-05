
function getSumOofMatchedWord(number){
var data=""+number;

var result=data.split("").reduce((sum,wrd,i)=>{
  if(i==0&&wrd==data[(data.length-1)])sum+=(+wrd);
  if(wrd==data[i+1]) sum+=(+wrd);
  return sum;
},0);

console.log(result);

}
 getSumOofMatchedWord("1212134343356"); ///// pass your input
