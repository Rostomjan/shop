import { Component, ViewChild, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';

import { Subscription } from 'rxjs/Subscription';
import { filter, map, switchMap } from 'rxjs/operators';

import { CartListComponent } from './cart/components';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  @ViewChild('cart') cartListComponent: CartListComponent;

  private sub: Subscription;
  cartFlag: false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private titleService: Title,
    private metaService: Meta
  ) {  }

  ngOnInit() {
    this.setPageTitlesAndMeta();
  }

  onAdded(flag) {
    if (this.cartFlag) {
      this.cartListComponent.onCartUpdate();
    }
    this.cartFlag = flag;
  }

  private setPageTitlesAndMeta() {
    this.sub = this.router.events
      .pipe(
        filter(event => event instanceof NavigationEnd),
        map(() => this.router.routerState.root),
        map(route => {
          while (route.firstChild) {
            route = route.firstChild;
          }
          return route;
        }),
        filter(route => route.outlet === 'primary'),
        switchMap(route => route.data)
      )
      .subscribe(
        data => {
          this.titleService.setTitle(data['title']);
          this.metaService.addTags(data['meta']);
        }
      );
    }
}
