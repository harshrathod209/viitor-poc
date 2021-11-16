import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/interfaces/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  products: Product[];
  productForm: boolean;
  isNewProduct: boolean;
  newProduct: any = {};
  editProductForm: boolean;
  editedProduct: any = {};
  searchText: string;

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.products = this.getProducts();
  }

  getProducts(): Product[] {
    return this.productService.getProductFromData();
  }

  showEditProductForm(product: Product) {
    if (!product) {
      this.productForm = false;
      return;
    }
    this.editProductForm = true;
    this.editedProduct = product;
  }

  showAddProductForm() {
    // resets form if edited product
    if (this.products.length) {
      this.newProduct = {};
    }
    this.productForm = true;
    this.isNewProduct = true;

  }

  saveProduct(product: Product) {
    if (this.isNewProduct) {
      // add a new product
      this.productService.addProduct(product);
    }
    this.productForm = false;
  }

  updateProduct() {
    this.productService.updateProduct(this.editedProduct);
    this.editProductForm = false;
    this.editedProduct = {};
  }

  removeProduct(product: Product) {
    this.productService.deleteProduct(product);
  }

  cancelEdits() {
    this.editedProduct = {};
    this.editProductForm = false;
  }

  cancelNewProduct() {
    this.newProduct = {};
    this.productForm = false;
  }
}
