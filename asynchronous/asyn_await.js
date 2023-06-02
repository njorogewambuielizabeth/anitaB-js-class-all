let success= false;
let promise = new Promise((resolve,reject)=>{
    if (success){
        setTimeout
            resolve("i will succeed")
    }
    else{
     reject("i am will")
    }
}).then(()=>{console.log("i will work hard");})
.catch(()=>{console.log("i will upskill");})

.finally(()=>{console.log("i am worthy");})

const student =  ()=>{
    let result =  promise;
    console.log({result});
}
student();
