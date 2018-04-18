TASK 1:
- created ProductComponent, ProductListComponent and CartComponent;
- added ProductsService and CartService with Product interface;
- implemented the functionality to add the products to the cart;
- the CartComponent is shown depending on if there are products in it;

TASK 2:
- split the app into modules;
- refactored the ProductListComponent and ProductsService;
- created the CartListComponent (displaying the bought products, quantity and total);
- added the СartItemComponent with capability to change the quantity and remove the product;
- used the following Angular functionality:  @Input(), @Output(), #variable, @ViewChild, @HostBinding, @HostListener, ngStyle, ngClass, etc;

TASK 3:
- modified the CartService. Added the new methods and implemented the refactoring;
- created LocalStorageService, ConfigOptionsService, ConstantsService, GeneratorService with the required functionality;
- registered the services above in the CoreModule and used in the TestCoreServicesComponent;
- created the BorderThemeDirective with using @Input(), ElementRef/Renderer2 and it was used on the ProductComponent;

TASK 4:
- used uppercase, currency pipes in the ProductComponent;
- modified the ProductService using promises. Used async pipe in the ProductListComponent and CartListComponent;
- created the "orderBy" pipe for sorting arrays with parameters - field of sorting and order;
- registered the OrderByPipe in the SharedModule. Applied the "orderBy" pipe in the CartListComponent;

TASK 5:
- added the routing to the Products module;
- added the route to the specific product and organazed the reviews section in the axillary router-outlet;
- added the routing to the Cart module;
- created the functionality to make an order in the cart;
- implemented the Admin module with functionality to manage the products. The Admin module is lazy-loaded if user is signed up;
- used the LocalStorageService to store ordered products;

TASK 6:
- used the json-server;
- created the ProductObservableService for working with the products;
- created the CartPromiseService for working with the cart;
- created the TimingInterceptor in the CoreModule which shows the duration of specific requests;
- implemented the AppSettings service using the LocalStorageService or the "app-settings.json" file to load the settings into the local storage;
