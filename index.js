let[hour,minute,second]=[0,0,0]
let display=document.querySelector(".display")
let result=null;

function start() {
  second++
  if(second==60){
    second=0
    minute++

    if(minute==60){
      minute=0
      hour++
    }
  }
  display.innerHTML=`${String(hour).padStart(2,"0")}:${String(minute).padStart(2,"0")}:${String(second).padStart(2,"0")}:`
}

function Watchstart(){
  if(result !==null){
    clearInterval(result)
  }
  result=setInterval(start,1000)
}

function watchstop(){
  clearInterval(result)
  result=null
}


function watchrest(){
  clearInterval(result)
  result=null
  hour=0;
  minute=0;
  second=0
  display.textContent="00:00:00"
}

