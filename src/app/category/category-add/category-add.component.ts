import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CategoryService } from '../category.service';

@Component({
  selector: 'app-category-add',
  templateUrl: './category-add.component.html',
  styleUrl: './category-add.component.css'
})
export class CategoryAddComponent {

    title = ''
    description = ''
    constructor(private service: CategoryService,private router: Router) {} 

    ngOnInit(): void{}

    onCancel(){
        this.router.navigate(['\category-list'])
    }

    onAdd(){
      if(this.title.length == 0) {
        alert('Please enter title')
      } else if (this.description.length == 0){
        alert('Please enter description')
      }
      else{
           this.service.addCategory(this.title,this.description)
           .subscribe(response =>{
            this.router.navigate(['\category-list'])
           })

           
      }
      this.router.navigate(['\category-list'])
    }


}
