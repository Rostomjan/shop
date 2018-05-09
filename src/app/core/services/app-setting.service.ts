import { Injectable } from '@angular/core';
import {HttpClient, HttpResponse, HttpErrorResponse} from '@angular/common/http';

import { map, catchError } from 'rxjs/operators';

import { LocalStorageService } from './local-storage.service';
import {_throw} from 'rxjs/observable/throw';
import { of } from 'rxjs/observable/of';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AppSettingService {

  constructor(
    private http: HttpClient
  ) { }

  load = (): Observable<any> => {
    const settings = LocalStorageService.getItem('settings');

    if (!settings) {
      return this.http.get('assets/app-settings.json')
        .pipe(
          map((response: HttpResponse<any>) => {
            LocalStorageService.setItem('settings', JSON.stringify(response));
            return response;
            }),
          catchError((err: HttpErrorResponse) => {
            let errorMessage: string;
            if (err.error instanceof Error) {
              errorMessage = `An error occurred: ${err.error.message}`;
            } else {
              errorMessage = `Backend returned code ${err.status}, body was: ${
                err.error
                }`;
            }
            if (err.status === 404) {
              LocalStorageService.setItem('settings', '{"name": "App_default", "version": "0.0.0", "params": [], "flag": false}');
              return of(null);
            } else {
              return _throw(errorMessage);
            }
          })
        );
    } else {
      return of(null);
    }
  }
}
