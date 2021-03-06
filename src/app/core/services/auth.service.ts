import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { delay, tap } from 'rxjs/operators';

@Injectable()
export class AuthService {
  isLoggedIn = false;

  redirectUrl: string;

  login(): Observable<boolean> {
    return of(true)
      .pipe(
        delay(1000),
        tap(() => this.isLoggedIn = true)
      );
  }

  logout(): void {
    this.isLoggedIn = false;
  }
}
