import { Injectable } from '@angular/core';
import { Product } from '../interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private productData: Product[] = [
    {
      id: 1,
      name: 'Coffee',
      price: 99
    },
    {
      id: 2,
      name: 'Tea',
      price: 150
    },
    {
      id: 3,
      name: 'Detergent',
      price: 99
    },
    {
      id: 4,
      name: 'Sugar',
      price: 70
    }
  ];

  constructor() { }

  getProductFromData(): Product[] {
    return this.productData;
  }

  addProduct(product: Product) {
    product.id = this.productData.length + 1;
    this.productData.push(product);

  }
  updateProduct(product: Product) {
    const index = this.productData.findIndex(p => product.id === p.id);
    this.productData[index] = product;
  }
  deleteProduct(product: Product) {
    this.productData.splice(this.productData.indexOf(product), 1);
  }

}
