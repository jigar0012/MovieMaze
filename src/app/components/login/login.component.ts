import { Component, OnInit } from '@angular/core';
import { MovieApiService } from 'src/app/services/movie-api.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;

  constructor(private fb: FormBuilder,private service : MovieApiService){
      // Initialize the form
      this.loginForm = this.fb.group({
        email: ['', [Validators.required, Validators.email]],
        password: ['', Validators.required]
      });
  }



  ngOnInit(): void {

  }

  submitForm() {
    if (this.loginForm.valid) {
      // Perform login logic using the TmdbApiService
      const email = this.loginForm.get('email')?.value;
      const password = this.loginForm.get('password')?.value;
      
      // Call the login method in your TmdbApiService passing email and password
      this.service.login(email, password)
        .subscribe((response) => {
          // Handle the login response
          console.log(response);
        });
    }
  }
}
