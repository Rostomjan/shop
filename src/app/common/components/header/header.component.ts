import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  navLinks = [
    { label: 'Home', path: 'home', icon: 'home' },
    { label: 'Login', path: 'login', icon: '' },
    { label: 'Admin', path: 'admin', icon: '' },
    { label: 'Cart', path: 'cart', icon: 'add_shopping_cart' }
  ];

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onDeactivate($event) {
    if ($event.constructor.name === 'ProductDetailComponent') {
      this.router.navigateByUrl(this.router.url.split('(')[0]);
    }
  }

}
