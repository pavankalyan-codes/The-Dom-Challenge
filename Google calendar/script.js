var meetings=[
    {
      startTime: "00:00",
      endTime: "01:30",
      color: "#f6be23",
      title: "#TeamDevkode",
    },
    {
      startTime: "3:30",
      endTime: "7:30",
      color: "#f6501e",
      title: "#TeamDevkode",
    },
    {
      startTime: "4:30",
      endTime: "8:30",
      color: "#f6501e",
      title: "#TeamDevkode",
    },
    {
      startTime: "6:30",
      endTime: "9:00",
      color: "#f6501e",
      title: "Demo",
    },
    {
      startTime: "11:00",
      endTime: "13:30",
      color: "#029be5",
      title: "#TeamDevkode",
    },
    {
      startTime: "12:00",
      endTime: "13:30",
      color: "#029be5",
      title: "#TeamDevkode",
    },
    {
      startTime: "9:30",
      endTime: "10:30",
      color: "#029be5",
      title: "#TeamDevkode",
    },
    {
      startTime: "16:00",
      endTime: "17:00",
      color: "#029be5",
      title: "#TeamDevkode",
    },
    {
      startTime: "15:00",
      endTime: "17:00",
      color: "#029be5",
      title: "#TeamDevkode",
    },
    {
      startTime: "18:00",
      endTime: "19:00",
      color: "#f6501e",
      title: "#TeamDevkode",
    },
    {
      startTime: "20:30",
      endTime: "22:30",
      color: "#029be5",
      title: "#TeamDevkode",
    },
    {
      startTime: "20:30",
      endTime: "22:30",
      color: "#029be5",
      title: "#TeamDevkode",
    },
  ]

var counter=1;
var startTimes = meetings.map((m)=>{
    //console.log(pad(m.startTime.split(":")[0],2));
    let id=pad(m.startTime.split(":")[0],2);
    let slot=document.getElementById(id);
    let top=parseInt(m.startTime.split(":")[1]);
    //console.log("top-->",top+50);
    let dims=getHours(m.startTime,m.endTime);
    let meeting=document.createElement("div");
    meeting.setAttribute("class","meeting");
    if(id==="00"){ 
        meeting.style.height=`${dims.totalHours*200+(((dims.extraMins/60)*2)*100)}%`;
        meeting.style.top=`${top}%`;
    }
    else{
        meeting.style.height=`${dims.totalHours*100+((dims.extraMins/60)*100)}%`;
        meeting.style.top=`${50+(top*1.66666666666666666)}%`;
    }
    
    meeting.style.background=`${m.color}`;
    meeting.style.zIndex=counter++;
    meeting.innerHTML=`${m.title}<div>${m.startTime}-${m.endTime}</div>`;
    slot.appendChild(meeting);
    //console.log(meeting);

});
function pad(num, size) {
    num = num.toString();
    while (num.length < size) num = "0" + num;
    return num;
}

function getHours(startTime,endTime){
    let t1=startTime.split(":");
    let t2=endTime.split(":");
    let startHour=parseInt(t1[0]);
    let startMin=parseInt(t1[1]);
    let endHour=parseInt(t2[0]);
    let endMin=parseInt(t2[1]);
    let hours=(endHour-startHour);
    let totalMins=hours*60-startMin+endMin;
    let totalHours=Math.trunc(totalMins/60);
    let extraMins=totalMins-totalHours*60;
    //console.log(totalHours+" - "+extraMins);
    return {totalHours,extraMins};
}