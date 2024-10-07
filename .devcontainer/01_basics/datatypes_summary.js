// 7 types: string, number, boolean, null,undefined, symbol, Bigint

const score=100;
const scorevalue=100.3;

const isLoggedIn=false;
const outsideTemp=null;
let userEmail; //undefined

const id=Symbol('123');
const newid=Symbol('123');
console.log(id===newid);

const bignumber= 32424543224354235343n;

// Reference (Non primitive)

//array, Objects,Functions

const heroes=["shaktiman","nagraj","doga"];
let myobj={
    name:"prateek",
    age:22,
}

const myfunction=function(){
    console.log("prateek");
}

console.log(typeof heroes);