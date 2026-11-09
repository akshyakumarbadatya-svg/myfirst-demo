// let num = 2;
// const number = 3;

// console.log(num,number,name);
var name = "akks"
// let name = "Rakshi"
console.log("outside :",name)
function getValue(){
     name = "Rajj"  
    
    console.log("inside B :",name)
}

getValue()
console.log("outside B :",name)

const sk=1;
sk=2;
console.log(sk);

// 1. Var 
/* 
> var is function scoped and can be reassigned
> (global scope means a variable is accessible anywhere in your code)
>(fuction scope means a variable can only be accessed within a specific function it was declared in.)
> Variable declared with var are limited to the function they're in.even if put inside a block 
 they won't accessible outside that function.  

> You can update a global variable from within a scope by assingning new value directily without using var,let ,const.
>   you can upadate the value in globally with assinging their var variable_name

 
2.let
> let can't redeclare a variable using let with inn the same scope ,block scoped


3.const 

> TypeError: Assignment to constant variable.so reassignment can't be possible
> You should initialize while assign 

*/
