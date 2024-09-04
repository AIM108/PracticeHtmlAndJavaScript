class book
{
    constructor(author,title,sn)
    {
        this.author=author;
        this.title=title;
        this.sn=sn;
    }
    printData(){console.log("\nAuthor: ",this.author,"\nTitle: ",this.title,"\nSerialNumber: ",this.sn)}
    
}

class shape
{
    constructor(name,sides,color)
    {
        this.name =name;
        this.sides =sides;
        this.color=color;
    }
    printShape()
    {
        console.log("\nName: ",this.name,"\nSides: ",this.sides,"\nColor: ",this.color);
    }
}
// const bookOne =new book("Dr.Stone","When the futer was the past",123456789);
// const bookTwo =new book("Dr.Rose","A Plants Life",987654321);
// bookOne.printData();
// bookTwo.printData();



// const square =new shape("Square",4,"blue");
// square.printShape();

const array =[1,2,3,4];
const arrayTwo=[5,6,7,8]
const matrixA =[array,arrayTwo];// 2x4 
console.log(matrixA);