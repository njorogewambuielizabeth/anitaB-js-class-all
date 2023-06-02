const work = ()=>{
    console.log("let us work");//synchorous function
}
work();


const reminder = ()=>{
    console.log("please attend the meeting");
}
setTimeout(reminder,4000); //asynchorous function for long running tasks
// setInterval(work,4000);

const takeBreak =()=>{
    console.log("please rest");
}
takeBreak();