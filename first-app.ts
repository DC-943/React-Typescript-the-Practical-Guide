let useName = "Max"
const API_KEY="abc"
//useName = 34
useName = "Max"

let userAge = 34
let isValid = true

//string, number, boolean
type StringOrNumber = string | number;


let userID: string | number = "abc1"
userID = 123
//useID=true

//let user:object;
type User={
  name:string;
  age:number;
  isAdmin:boolean;
  id:string|number;
};

let user:User

user={
  name:"Max",
  age:34;
  isAdmin:true;
  id:'abc'
}

//use={}

//let hobbies: Array<string>;

//{name: string;age:number}
let hobbies:string[]
hobbies=["Sports", "Cooking","Reading"];

function add(a:number, b:number){
const result=a+b;
console.log(result)
return result
}

type AddFn =(a:number, b:number)=>number

function calculate(a:number, b:number, calcFn:AddFn){
  calcFn(a,b);
}
calculate(2,5,add)

interface Credentials{
   password:string;
   email: string; 
}

interface Credentials{
  mode:string;
}


let credentials: Credentials;

credentials={
  password:"134",
  email:"abc@abc.com",
  mode:"add"
};

class AuthCredentials implements Credentials{
   email:string;
   password:string;
   useName:string;
   mode:string;
}

function login(credentials:Credentials){


}

login(new AuthCredentials())

// type Admin = {
//   permission:string[]

// };

// type AppUser ={
//     userName:string;
// }

// type AppAdmin = Admin & AppUser;

// admin={
//   permissions:["login"],
//   userName:"Max"
// }

interface Admin{
  permissions:string[];
}
interface AppUser{
  userName:string;

}

interface AppAdmin  extends Admin, AppUser{


}
let admin:AppAdmin;
admin={
     permissions:["login"],
     userName:"Max"
}

 type Role = "admin" | "user" | "editor" | 1
let role: Role

role = "admin";
role = "user";
role = "editor";
//role = "abc";

function performAction(action:string | number, role:Role ){
   if(role==="admin" && typeof action==="string"){
    //
   }
}

let roles:Array<Role>;
roles =['admin', 'editor'];

type DataStorage<T> ={
  storage:T[];
  add:(data:T)=>void;
};

const textStorage:DataStorage<string>={
  storage:[],
  add(data) {
    this.storage.push(data)
  }
}
const userStorage:DataStorage<User>={
    storage:[],
    add(user){}
}

function merge<T,u>(a:T, b:U){
   return {
     ...a,
     ...b
   };
}


const newUser =merge<{name: string}, {age:number}>({name:"Max"}, {age:34})

newUser.name
