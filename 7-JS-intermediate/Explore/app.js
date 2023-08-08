// //class declaration

// class Person {
//     //properties
//     name = "Mg Mg";
//     age = 17;
//     //methods
//     run(){
//         return "Mg Mg can run"
//     }
// }
// // console.log(person)

// // class => object ( instantiate )

// const person = new Person()

// console.log(person)

// console.log(person.name)
// console.log(person.age)
// console.log(person.run())

// // class က obj ရဲ့ template | blueprint

// class Student {
//     //name,age,gender,major
// };

// const st1 = new Student();
// //properties
// st1.name = "Min Thu Khant";
// st1.age = 16;
// st1.gender = "male";
// st1.major = "IT";
// //method
// st1.run = function(){
//     return st1.name + "can learn everything";
// };
// console.log(st1);

// const st2 = new Student();
// st2.name = "Mg Mg";
// st2.age = "18";
// st2.gender = "male";
// st2.major = "eco";
// console.log(st2)

// const obj = {
//     name : "Kyaw Kyaw",
//     age : 17,
//     gender : "male",
//     major : "bio",
//     learn(){
//         return this.name + " can learn everything"
//     }
// }
// console.log(obj.learn())




class Student {
  //name,age,gender,major
  constructor(inputname, inputage, inputgender, inputmajor) {
    this.name = inputname;
    this.age = inputage;
    this.gender = inputgender;
    this.major = inputmajor;

    //profit
    this.nameprefix = this.gender === "male" ? "Mg" : "Ma";
    this.birthyear = 2023 - this.age;
    this.subject = ["mm ", "eng ", "math ", "chem ", "phy ", this.major];
    this.pronoun = this.gender === "male" ? "he" : "she";
  }

  learn() {
    return this.name + " can learn " + this.subject;
  }

  about() {
    return `${this.name} is ${this.age} year${this.age > 1 && "s"} old and ${
      this.pronoun
    } was borned in ${this.birthyear}.Now ${this.pronoun} attend ${this.major} major`;
  }
}

class Monitor extends Student {
    room = "Grade A"
}

// const ga1 = new Monitor("Min thu Khant","16","male","IT")
// console.log(ga1)
// console.log(ga1.learn())
// console.log(ga1.about())

// // const st = new Student("xxx","yyy")

// const st1 = new Student("Mg Mg", 16, "male", "bio");
// console.log(st1);
// console.log(st1.learn());
// console.log(st1.about());

// const st2 = new Student("Su Su", 15, "female", "eco");
// console.log(st2);
// console.log(st2.about())

// const st3 = new Student("Nat-Soul", 16, "male", "IT");
// console.log(st3);



// class A {
//     a = "aaa";
//     x = "xxx";
//     y = "yyy";
// }

// class B extends A {
//     b = "bbb"
// }

// class C extends B{
//     c = "ccc"
// }

// // const a = new A
// // console.log(a)

// // const b = new B
// // console.log(b)

// const c = new C
// console.log(c)



// class A {
//     a = "aaa"
//     #y = "yyy"
// }

// const a = new A
// console.log(a.a)
// console.log(a.y)



// class A {
//     a = "aaa"
//     static y = "yyy"
//     static x(){
//         return "xxx"
//     }
// }

// // const a = new A
// // console.log(a.a)

// console.log(A.y)
// console.log(A.x())



// // method chainging
// class A {
//     x(){
//         console.log("this is x")
//         return this
//     }
//     y(){
//         console.log("this is y")
//         return this
//     }
//     z(){
//         console.log("this is z")
//         return this
//     }
// }

// const a = new A

// // a.x()
// // a.y()
// // a.z()

// a.x().y().z()



// const d = new Date()

// d.setHours(d.getHours() + 300)
// d.setMonth(d.getMonth() + 4)
// d.setDate(d.getDate() + 25)

// console.dir(d)

// console.log(d.toDateString())
// console.log(d.toTimeString())
// console.log(d.toLocaleDateString())
// console.log(d.toLocaleTimeString())

// console.log(d.getDate())
// console.log(d.getMonth())
// console.log(d.getYear())
// console.log(d.getFullYear())
// console.log(d.getHours())
// console.log(d.getMinutes())
// console.log(d.getSeconds())
// console.log(d.getMilliseconds())
// console.log(d.getTime())



// const str = new String("       Min Ga Lar Byar        ");

// console.log(str)
// console.log(str.toUpperCase())
// console.log(str[4])
// console.log(str.length)
// console.log(str.substr(4,6))
// console.log(str.substring(4,10))
// console.log(str.search("G"))
// console.log(str.replace("ar","xx"))
// console.log(str.replaceAll("ar","xx"))
// console.log(str.trim())
// console.log(str.length)
// console.log(str.trim().length)
// console.log(str.trimStart())
// console.log(str.trimEnd())

// const luckynumber = "325A35"
// console.log(luckynumber.padStart(10,"A"))
// console.log(luckynumber.padEnd(10,"A"))

// // str to array
// console.log(str.trim().split(" "))
// console.log(str.trim().split(" ",3))



const num = new Number("894.68634");
const strNum = "235.66342"
const weight = "120.53kg"

// console.log(typeof num)
// console.log(num)
// console.log(num.toString())
// console.log(num.toFixed(2))
// console.log(num.toPrecision(2))

// console.log(Number(weight))

// console.log(parseFloat(weight))
// console.log(parseInt(weight))



// console.log(isNaN("Min" - "Khant"))
// console.log(eval("4+3"))



// console.log(Math)
// console.log(7 - 5)
// console.log(5 - 7)
// console.log(Math.abs(5 - 7))

// console.log(Math.round(123.67))
// console.log(Math.ceil(123.14))
// console.log(Math.floor(123.67))



// console.log(Math.random())
// console.log(Math.random() * 10)
// console.log(Math.floor(Math.random() * 10))

// console.log(2 ** 5)
// console.log(Math.pow(2,5))
// console.log(Math.sqrt(16))

// function run(x,y){
//   return y(x)
// }

// console.log(run(5 , function(x){
//   return x + 2
// }))

// console.log(run(5 , function(x){
//   return x * 2
// }))



// // arrow function

// const run = (x,y) => x + y

// const run = (x,y) => "this is arrow function " + (x + y)
// console.log(run(34,16))


// const run = (x,y) => {
//   let result = x * y
//   return "this is arrow function ----- " + result
// }
// console.log(run(10,2))

// const obj = {
//   a : "aaa",
//   b(){
//     console.log(this)
//     return "this is b"
//   },
//   c : function(){
//     console.log(this)
//     return "this is c"
//   },
//   d : () => {
//     console.log(this)
//     return "this is d"
//   }    
// }

// console.log(obj.b())
// console.log(obj.c())
// console.log(obj.d())



// const sum = new Function("a","b", "return a + b");

// console.dir(sum)
// console.log(sum(2,3))

function run(x,y){
  console.log(arguments)
  return x + y
}

console.dir(run)
// console.dir(run.name)
console.log(run.bind(null,2,3,2,4,5).call())