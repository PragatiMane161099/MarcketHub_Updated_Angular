import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../response.interface';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];

  constructor(private service: ProductService) {}

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts(): void {
    this.service.getProducts().subscribe(response => {
      if (response.status === 'success') {
        this.products = response.data;
      } else {
        alert(response.error);
      }
    });
  }
}
