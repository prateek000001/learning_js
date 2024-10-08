// const user={
//     username:"prateek",
//     userid:"1232",
//     welcomemessage:function()
//     {
//         console.log(`${this.username},welcome to my world`);
//         console.log(this);
//         // represent the copy of current object;
//     },
// }
// user.welcomemessage();
// user.username="karan";
// user.welcomemessage();
// console.log(this);

// function chai()
// {
//    let username="prateek";
//     console.log(this.username);
// }
// chai();

// const chai =function(){
//     let username="prateek";
//     console.log(this.username);
// }
// chai();

// const chai = () =>{
// let username="prateek";
// console.log(this.username);
// }
// chai();

// const addtwo=(num1,num2) =>{
//   return num1+num2;
// }
// or
// const addtwo= (num1,num2)=> num1+num2;
//or
const addtwo=(num1,num2)=>(num1+num2);
console.log(addtwo(2,3));