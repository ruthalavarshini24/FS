class car{
    constructor(name,brand,cost){
        this.name=name;
        this.brand=brand;
        this.cost=cost;
    }
    displayInfo() {
      return `${this.brand}  price is ${this.cost}.`;
  }
   
}
const mycar=new car("toyota","mahindra",1000000);
console.log(mycar.displayInfo());
