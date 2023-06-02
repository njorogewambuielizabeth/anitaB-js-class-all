const add= ()=>{
    let num = 20;
    const subtract=()=>{
        return num-5;
    }
    return subtract;
}
let nums = add();
console.log({nums});// wrong way of calling this function
console.log(nums());