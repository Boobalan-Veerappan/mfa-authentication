import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentUrl: string = '';
  title = 'mfa-authentication';
  selectedMethod: boolean = false;
  


  constructor(public router: Router,public activatedRoute: ActivatedRoute) {
     this.currentUrl = window.location.href.split('/').pop() || '';
     this.selectMethod(this.currentUrl);
     
  }

  selectMethod(method: string) {
    console.log(`Selected method: ${method}`);
    this.router.navigate([`/${method}`]);
    this.selectedMethod = true;

  }
}
