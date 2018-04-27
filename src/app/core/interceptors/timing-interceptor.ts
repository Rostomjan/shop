import {Injectable} from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse, HttpParams } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators/map';

@Injectable()
export class TimingInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let clonedRequest;
    const [method, startTime] = [req.method, Date.now()];

    if (['products', 'cart'].some(str => req.url.includes(str))) {
      clonedRequest = req.clone({
        params: new HttpParams()
          .set('time_interceptor', Date.now().toString())
      });
    } else {
      clonedRequest = req;
    }

    return next.handle(clonedRequest)
      .pipe(
        map((event: HttpEvent<any>) => {
          if (event instanceof HttpResponse) {
            if (event.url.includes('time_interceptor')) {
              console.log(`Method[${method}] - Request duration`, `${Date.now() - startTime} ms`);
            }
            return event;
          }
        })
      );
  }
}
