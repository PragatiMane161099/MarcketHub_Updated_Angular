import { Component } from '@angular/core';
import { CategoryService } from '../category.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-category-edit',
  templateUrl: './category-edit.component.html',
  styleUrl: './category-edit.component.css'
})
export class CategoryEditComponent {
  
  title = ''
  description = ''
  id: number = 0
  route: any;
  constructor(private service: CategoryService,private router: Router) {} 

  ngOnInit(): void{
    this.route.paramMap.subscribe((params: { get: (arg0: string) => any; }) => {
      this.id = +params.get('id')!;
      this.loadCategory();
    });
  }

  loadCategory(): void {
    if (this.id) {
      this.service.getCategories().subscribe(response => {
        if (response.status === 'success') {
          const category = response.data.find(cat => cat.id === this.id);
          if (category) {
            this.title = category.title;
            this.description = category.description;
          }
        } else {
          alert(response.error);
        }
      });
    } else {
      alert('Invalid category ID');
      this.router.navigate(['/category-list']);
    }
  }

  onCancel(){
      this.router.navigate(['\category-list'])
  }

  onUpdate(){
    if(this.title.length == 0) {
      alert('Please enter title')
    } else if (this.description.length == 0){
      alert('Please enter description')
    }
    else{
         this.service.editCategory(this.id,this.title,this.description)
         .subscribe(response =>{
          console.log(response)
          this.router.navigate(['\category-list'])
         })

         
    }
    this.router.navigate(['\category-list'])
  }


}
