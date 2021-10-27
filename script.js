const dys=document.getElementById('days');
const hrs=document.getElementById('hours');
const min=document.getElementById('mins');
const sec=document.getElementById('seconds');




const newYear="1 Jan 2022";


function countdown(){
    const newyeardate=new Date(newYear);
    const currentdate=new Date();

    const totalseconds=(newyeardate-currentdate)/1000;

    const days=Math.floor( totalseconds /3600 /24) ;
    
    const hours=Math.floor(totalseconds/3600)%24;

    const mins=Math.floor(totalseconds/60)%60;
    
    const seconds=Math.floor(totalseconds)%60;
    
    dys.innerHTML=days;
    hrs.innerHTML=formattime(hours);
    min.innerHTML=formattime(mins);
    sec.innerHTML=formattime(seconds);  

    // console.log(days,hours,minutes,seconds);


    // console.log(newyeardate-currentdate);
}

function formattime(time){
    return (time < 10 ? '0' : '') + time;
}



countdown();


setInterval(countdown,1000);
