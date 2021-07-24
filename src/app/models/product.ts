export class Product {
    id?: number;
    name: string;
    price: number;
    image: string;
    category: string;

    constructor(id:0, name:"", price:0,image:"",category:"http://demo.roadthemes.com/safira/wp-content/uploads/2020/04/13.jpg"){
        this.id=id
        this.name =name
        this.category=category
        this.price=price
        this.image=image;
    }
}