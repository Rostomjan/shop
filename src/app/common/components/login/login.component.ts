import { Component, OnInit, OnDestroy, ChangeDetectionStrategy } from '@angular/core';

import { Store, select } from '@ngrx/store';
import { AppState } from './../../../core/+store';
import * as RouterActions from './../../../core/+store/router/router.actions';

import { Subscription } from 'rxjs/Subscription';

import { AuthService } from '../../../core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent implements OnInit, OnDestroy {
  message: string;

  private sub: Subscription;

  constructor(
    public authService: AuthService,
    public store: Store<AppState>
  ) {}

  ngOnInit() {
    this.setMessage();
  }

  ngOnDestroy() {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }

  login() {
    this.message = 'Trying to log in ...';
    this.sub = this.authService.login().subscribe(() => {
      this.setMessage();
      if (this.authService.isLoggedIn) {
        const redirect = this.authService.redirectUrl
          ? this.authService.redirectUrl : '/admin';


        this.store.dispatch(new RouterActions.Go({
          path: [redirect]
        }));
      }
    });
  }

  logout() {
    this.authService.logout();
    this.setMessage();
  }

  private setMessage() {
    this.message = 'Logged ' + (this.authService.isLoggedIn ? 'in as admin' : 'out');
  }
}
