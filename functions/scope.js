let a = 20;  //global variable

function add(b) {
    console.log(a+b);
    let c = 30;  //local variable
    console.log(a+b+c);
    
}
add(20);
console.log(a);

function greet() {
    let hello = "hey"; //is a global variable
    function talk() {
        let greeting = "hello there"; // it can access variable hello since they are in the same scope
        console.log(`${hello} ${greeting}`);
        
    }
    talk()
    
}
greet()


