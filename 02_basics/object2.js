// const tinderuser=new Object(); // singleton object
const tinderuser={} //multiinstance object

tinderuser.name="sandeep";
tinderuser.id='1021';
tinderuser.city='jaipur';

// console.log(tinderuser);
const id=Symbol("id");
const regularuser={
    [id]:"1233",
    fullname:{
        username:{
            firstname:"prateek",
            lastname:"Lahari",
        }
    }
}

// console.log(regularuser.fullname.username.firstname);

const user1={
    1:"a",
    2:"b",
}
const user2={
    3:"a",
    4:"b",
}
const user3={
    5:"a",
    6:"b",
}

// const user4=Object.assign({},user1,user2,user3);
// console.log(user4);

//this is the one method to concat objects

//another is spreading

const user4={...user1,...user2,...user3};
// console.log(user4);

// console.log(Object.keys(tinderuser));
// return an array containing all keys of particular array

// console.log(Object.values(tinderuser));

//return an array containing all values of paricular object

// console.log(Object.entries(tinderuser));

//return an arrqay containing all keys with its own values

// console.log(tinderuser.hasOwnProperty('1'));
//particular key is present or not

const course={
    course_name:"js",
    course_instructor:"HC",
}

// console.log(course.course_instructor);
// but if course_instructor can be called again and again

const {course_instructor:insturctor}=course;

console.log(insturctor);

// this is called destructure of an object;