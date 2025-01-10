import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoryService } from '../category.service';
import { category } from './../category-add/response.interface';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {
  categories: category[] = [];

  constructor(private router: Router, private service: CategoryService) {}

  ngOnInit(): void {
    this.loadCategories();
  }

  loadCategories(): void {
    this.service.getCategories().subscribe(response => {
      if (response.status === 'success') {
        this.categories = response.data;
      } else {
        alert(response.error);
      }
    });
  }

  onAdd(): void {
    this.router.navigate(['/category-add']);
  }

  onEdit(category: any): void {
    
    this.router.navigate(['/category-edit', category.id]); 
    
  }

  onDelete(category: any): void {
    this.service.deleteCategories(category.id).subscribe(response => {
      if (response.status === 'success') {
        this.loadCategories();
      } else {
        alert(response.error);
      }
    });
  }
}
