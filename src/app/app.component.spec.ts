import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA, Injectable } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { of } from 'rxjs/observable/of';

import { AppComponent } from './app.component';

@Injectable()
export class ActivatedRouteStub {
  private _data: any;

  get data() {
      return this._data;
  }
}

@Injectable()
export class RouterStub {
  events = of(new NavigationEnd(0, 'http://localhost:3000/home', 'http://localhost:3000/home'));
  private _routerState = { root: '' };

  get routerState() {
    return this._routerState;
  }

  set routerState(routerState) {
    this._routerState = routerState;
  }
}

describe('AppComponent', () => {
  let component: AppComponent,
  fixture: ComponentFixture<AppComponent>,
  router: Router,
  route: ActivatedRoute,
  setPageTitlesAndMetaSpy: jasmine.Spy;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [RouterTestingModule],
      providers: [{provide: Router, useClass: RouterStub}, {provide: ActivatedRoute, useClass: ActivatedRouteStub}],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.debugElement.componentInstance;
    router = TestBed.get(Router);
    route = TestBed.get(ActivatedRoute);

    const mockRouterState = { root: { firstChild: { outlet: 'primary', data: { title: 'Home' } } } };
    const mockData = { title: 'Home', meta: { name: 'description', content: 'Iherb shop'} };

    spyOnProperty(route, 'data', 'get').and.returnValue(mockData);
    spyOnProperty(router, 'routerState', 'set').and.returnValue(mockRouterState);
    setPageTitlesAndMetaSpy = spyOn<any>(component, 'setPageTitlesAndMeta').and.callThrough();
    fixture.detectChanges();
  });

  it('should create the app', async(() => {
    expect(component).toBeTruthy();
  }));

  it('should call the setPageTitlesAndMetaSpy method', async(() => {
    expect(setPageTitlesAndMetaSpy.calls.any()).toBe(true, 'component.setPageTitlesAndMetaSpy called');
  }));
});
