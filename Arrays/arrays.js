let items = [2,5,"sweet",false,45];

//Array Methods

items.push(62);  // adds another item
console.log(items);
items.unshift(6.5);  //
console.log(items);
items.pop();     //deletes the last item from list        
console.log(items);
items.shift();         // removes item from array
console.log(items);


let num = [1,9,100,12,2,30];
let sorted =num.sort((a,b)=>a-b);     //(a,b)=>-a-b       // arranges in ascending and descending order
console.log(sorted);

// given an array of x elements, return an array with each element in x multiplied by 2
const result = num.map(
    (items)=>{
        return items*2
    }
)
console.log(result);

// method of for each

// console.log(result);
// let newArray = ()
// const result2 = num.(array).forEach(items,=> {




let a = [1,2,3];
let b = [4,5,6];

let joined1 = a.concat[b];
console.log({joined1});
let c = [1,40, ...a,...b];
console.log({c});

//destructuring 
let [z,x,...e] = c
console.log({z});
console.log({x});
console.log({e});



    


