import { Component } from '@angular/core';
import { BrandService } from '../brand.service';
import { brand } from './../response.interface';

@Component({
  selector: 'app-brand-list',
  templateUrl: './brand-list.component.html',
  styleUrl: './brand-list.component.css'
})
export class BrandListComponent {
  brands: brand[] = [];
  
  constructor(private service: BrandService) {}

  ngOnInit(): void {
    this.loadBrands();
  }

  loadBrands(): void {
    this.service.getBrands().subscribe(response => {
      if (response.status === 'success') {
        this.brands = response.data;
      } else {
        alert(response.error);
      }
    });
  }

}
