export class Product {
  id?: number;
  name: string;
  price: number;
  image: string;
  category: string;

  constructor(id = 0, name = '', price = 0, image = '', category = '') {
    this.id = id;
    this.name = name;
    this.price = price;
    this.image = image;
    this.category = category;
  }
}
