const person ={
    name:"NoNameDeclared",
    age:"NoAgeDeclared",
    printPerson: ()=>{console.log("Hello my name is ",person.name," and I am ",person.age," years old.");},
    isOutOfHighSchool: ()=>{if(person.age>18){return true}else{return false}}
};
person.name ="Alonso";
person.age =12;
person.printPerson();
console.log(person.isOutOfHighSchool());

