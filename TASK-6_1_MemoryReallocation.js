var data="14 0 15 12 11 11 3 5 1 6 8 4 9 1 8 4";
var pattenlist=[],same_patrn_cnt=1;
findMemoryBankSpace(data);  /////// Pass Your Input Here
function findMemoryBankSpace(data,istriggerd=false){
    let aray_cnvt=(""+data).split(" "),len=(aray_cnvt.length-1);
    let max_no=Math.max.apply(null,aray_cnvt);
    let max_no_pos=aray_cnvt.indexOf(""+max_no);
    let max_divider=((max_no/len)|0)||1;
    let crnt_patrn="";
    crnt_patrn=aray_cnvt.map((no,i)=>{
    no=(+no);
    return (max_no_pos!=i)?no+=max_divider:(no-(max_divider*len));
    }).join(" ");
    
    if(pattenlist.indexOf(crnt_patrn)==-1){
    pattenlist.push(crnt_patrn);
    same_patrn_cnt++;
    if(!istriggerd)pattenlist.push(data);
    findMemoryBankSpace(crnt_patrn,true);
    }
    else{
       console.log(same_patrn_cnt);
    }
  
}