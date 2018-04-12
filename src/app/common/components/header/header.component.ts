import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit() {
  }

  onDeactivate($event) {
    if ($event.route && $event.route.component.name === 'ProductDetailComponent') {
      $event.router.navigateByUrl($event.router.url.split('(')[0]);
    }
  }

}
