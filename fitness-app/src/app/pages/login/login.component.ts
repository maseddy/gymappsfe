import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  imports: [FormsModule]
})
export class LoginComponent {
  username = '';
  password = '';
  rememberMe: boolean = false;

  constructor(private http: HttpClient, private router: Router) {}

  login() {
    const loginData = {
      username: this.username,
      password: this.password
    };

    this.http.post('http://localhost:8080/api/login', loginData, { observe: 'response' }).subscribe(
      (response) => {
        if (response.status === 200) {
          Swal.fire({
            icon: 'success',
            title: '<h3 style="font-size: 16px;">Login Successful</h3>',
            text: 'Welcome to Fitness Apps!',
            width: '280px',
            padding: '8px',
            showConfirmButton: false,
            timer: 2000,
            customClass: {
              popup: 'small-swal',
            }
          }).then(() => {
            this.router.navigate(['/members']); // Navigate after closing Swal
          });      
        }
      },
      (error) => {
        Swal.fire({
          icon: 'error',
          title: '<h3 style="font-size: 16px;">Login Failed</h3>',
          text: 'Invalid username or password!',
          width: '280px',
          padding: '8px',
          confirmButtonColor: '#DC143C',
          confirmButtonText: 'OK',
          customClass: {
            popup: 'small-swal',
            confirmButton: 'small-ok-btn',
          }
        });
      }
    );



    if (this.username === 'admin' && this.password === 'admin') {
      
    } else {
      //alert('Invalid credentials');
      
    }
  }
}
