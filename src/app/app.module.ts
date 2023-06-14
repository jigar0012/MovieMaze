import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import {HttpClientModule} from '@angular/common/http'
import { MovieApiService } from './services/movie-api.service';
import { MoviedetailsComponent } from './components/moviedetails/moviedetails.component';
import { FormsModule } from '@angular/forms';
import { MovieSearchComponent } from './components/movie-search/movie-search.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { AllmovieComponent } from './components/allmovie/allmovie.component';
import { RegisterComponent } from './components/register/register.component';
import { SocialLoginModule, SocialAuthServiceConfig } from '@abacritt/angularx-social-login';
import {
  GoogleLoginProvider,
  FacebookLoginProvider
} from '@abacritt/angularx-social-login';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    MoviedetailsComponent,
    MovieSearchComponent,
    LoginComponent,
    AllmovieComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,ReactiveFormsModule,
    HttpClientModule,FormsModule
  ],
  providers: [MovieApiService,
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              '1087559417667-q4gercq495iu1ubnugij4jbio5hm2d9q.apps.googleusercontent.com'
            )
          },
          {
            id: FacebookLoginProvider.PROVIDER_ID,
            provider: new FacebookLoginProvider('1087559417667-q4gercq495iu1ubnugij4jbio5hm2d9q.apps.googleusercontent.com')
          }
        ],
        onError: (err) => {
          console.error(err);
        }
      } as SocialAuthServiceConfig,
    }],
  
  bootstrap: [AppComponent]
})
export class AppModule { }

