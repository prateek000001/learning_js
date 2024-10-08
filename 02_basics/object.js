// singleton objects=> constructor se banega to objects singleton hoga or uska ek hi instance hoga
//object.create

//object literals=> having multiple instances

const mysym=Symbol("id");
const user={
    name: "prateek",
    "full name":"prateek lahari",
    age:23,
    [mysym]:"id1",
    location:"Prayagraj",
    email: "prateeklahari@googlee.com",
    isloggedin:false,
    lastloggedin:["monday","tuesday","wednesday","friday","saturday"],
}

// console.log(user.name);
// console.log(user["name"]);
// console.log(user[ "full name"]);

// two different ways to access elements of an array but second wala only applicable on non string keys.

// console.log(user[mysym]);
// here type is string because mysym is not written in brackets

user.email="prateeklahari@microsoft.com";

// console.log(user["email"]);
// Object.freeze(user);
user.email="prateeklahari@cittitorp.com";

// console.log(user["email"]);
// console.log(user);

user.greeting = function(){
    console.log("Hello JS user");
}
user.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(user.greeting());
console.log(user.greetingTwo());