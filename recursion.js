//"Your life is your own and its up to your to llive exsaclly the way you want to"


function recursionList(n)
{   console.log(n)
    if(n ==1)
    {
        return 1;
    }
    
    return recursionList(n-1)
}

let person = new Object();
person.name ="Daniel";
person.age = 18;
person.multiplyage =(number)=>{person.age =person.age*number};
person.multiplyage(10);
let animal ={ name: "Dog", Age:14};

function Car(name,model)
{
    this.name=name;
    this.model=model;
}

let car01 = new Car("Toyota","Camery");



function testmain()
{
    console.log(person);
    console.log(animal);
    console.log(car01);
    //console.log("Standard recursion has a O(n) time and a space complexity of O(n)")
    //recursionList(10)
}


testmain()
