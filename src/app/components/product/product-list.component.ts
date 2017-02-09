import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product/product.service';
import { Product } from '../../models/product';

@Component({
  selector: 'product-list',
  templateUrl: '../../views/product/product-list.component.html'
  })

  export class ProductsListComponent implements OnInit {   
    constructor(private productService: ProductService) { }
    products: Product[];
    selectedProduct: Product = null;
    onSelect(product): void {
      this.selectedProduct = product;
    };
    getProducts(): void {
      this.productService.getProducts()
        .subscribe(products => {
          this.products = products
        });
    }
    ngOnInit(): void {
      this.getProducts();
    }
  }