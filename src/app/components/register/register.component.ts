import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MovieApiService } from 'src/app/services/movie-api.service';
import { SocialAuthService } from "@abacritt/angularx-social-login";
import { SocialUser } from "@abacritt/angularx-social-login";


declare const gapi: any;
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})

export class RegisterComponent implements OnInit {

  registerForm!: FormGroup;
  user!: SocialUser;
  loggedIn!: boolean;

  constructor(private fb: FormBuilder,private authService: SocialAuthService, private service: MovieApiService) {
    // Initialize the form
    this.registerForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  
  ngOnInit(): void {
    // Load the Google Sign-In API script dynamically
    const script = document.createElement('script');
    script.src = 'https://apis.google.com/js/platform.js';
    script.onload = () => this.initializeGoogleSignIn();
    document.head.appendChild(script);
  }

  initializeGoogleSignIn(): void {
    gapi.load('auth2', () => {
      gapi.auth2
        .init({
          client_id: '1087559417667-q4gercq495iu1ubnugij4jbio5hm2d9q.apps.googleusercontent.com',
        })
        .then(() => {
          console.log('Google Sign-In API initialized');
        })
        .catch((error: any) => {
          console.error('Error initializing Google Sign-In API:', error);
        });
    });
  }

  signInWithGoogle(): void {
    gapi.auth2
      .getAuthInstance()
      .signIn()
      .then(
        (googleUser: any) => {
          const profile = googleUser.getBasicProfile();
          const email = profile.getEmail();
          const password = ''; // Set a default password for Google sign-in
  
          // Call the register method in your TmdbApiService passing email and password
          this.service.register(email, password).subscribe((response) => {
            // Handle the registration response
            console.log(response);
          });
  
          console.log('User logged in with Google.'); // Log a message when user logs in
        },
        (error: any) => {
          // Check if the error is "popup_closed_by_user"
          if (error && error.error === 'popup_closed_by_user') {
            console.log('Google Sign-In popup was closed by the user.');
          } else {
            console.error(error);
          }
        }
      );
  }
  
  

  submitForm() {
    if (this.registerForm.valid) {
      // Perform registration logic using the TmdbApiService
      const email = this.registerForm.get('email')?.value;
      const password = this.registerForm.get('password')?.value;
      
      // Call the register method in your TmdbApiService passing email and password
      this.service.register(email, password)
        .subscribe((response) => {
          // Handle the registration response
          console.log(response);
        });
    }
  }



}
