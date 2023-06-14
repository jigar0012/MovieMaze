import { Injectable } from '@angular/core';


declare const google: any;

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private authInstance: any;

  constructor() { }

  public initializeGoogleSignIn(clientId: string): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      google.accounts.id.initialize({
        client_id: clientId,
        callback: this.handleGoogleSignInCallback.bind(this)
      });
      google.accounts.id.prompt((notification: any) => {
        if (notification.isNotDisplayed()) {
          reject(new Error('Failed to display Google Sign-In'));
        }
      });
    });
  }

  private handleGoogleSignInCallback(response: any): void {
    const credential = response.credential;
    // Use the credential to authenticate the user or perform further actions
  }

  public signOut(): void {
    google.accounts.id.disableAutoSelect();
    google.accounts.id.revoke(localStorage.getItem('gtoken'), () => {
      localStorage.removeItem('gtoken');
    });
  }
}
