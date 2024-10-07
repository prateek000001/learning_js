//***********************************************/

// Stack(Primitive) , Heap(Non-Primitive)
 
let myname="Prateek";
let yourname=myname;
yourname="rohan"
console.log(myname);
console.log(yourname);

let userone={
    userEmail: "user@gmail.com",
    userid:Symbol('1'),
}
let usertwo =userone;
usertwo.userEmail="user@yahoo.com";
console.log(userone.userEmail);
console.log(usertwo.userEmail);
