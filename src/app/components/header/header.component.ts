import { Component, } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
 
  
  constructor() {}
  
  openSearchModal() {
    const modal = document.getElementById('searchModal');
    if (modal) {
      modal.style.display = 'block';
    }
  }

  closeSearchModal() {
    const modal = document.getElementById('searchModal');
    if (modal) {
      modal.style.display = 'none';
    }
  }

}
