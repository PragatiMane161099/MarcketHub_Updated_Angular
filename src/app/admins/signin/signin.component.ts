import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { HttpErrorResponse } from '@angular/common/http';
import { SigninResponse } from '../response.interface'; // Adjust path as needed

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  email = '';
  password = '';

  constructor(private router: Router,private service: AdminService) {}

  ngOnInit(): void {}

  onSignin(): void { 
    if(this.email.length==0){
      alert('Please enter email!')
    }
    else if (this.password.length==0)
      {
        alert('Please enter password!')
      }
    else
    {
    this.service.signin(this.email, this.password).subscribe(
      (response: SigninResponse) => {
        if (response.status === 'success') {
          alert('Welcome');
          console.log(response.data)
          const user = response['data']
          sessionStorage['user_name'] = user['firstname'] + ' ' + user['lastname']
          sessionStorage['token'] = user['token']

          this.router.navigate(['/product-list'])
        }
         else {
          alert(response.error);
        }
      },
      (error: HttpErrorResponse) => {
        console.error('Error occurred:', error);
      }
    );
  } }     
}
