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
- Used uppercase, currency pipes in the ProductComponent;
- modified the ProductService using promises. Used async pipe in the ProductListComponent and CartListComponent;
- created the "orderBy" pipe for sorting arrays with parameters - field of sorting and order;
- registered the OrderByPipe in the SharedModule. Applied the "orderBy" pipe in the CartListComponent;

TASK 5:
- Added the routing to the Products module;
- Added the route to the specific product and organazed the reviews section in the axillary router-outlet;
- Added the routing to the Cart module;
- Created the functionality to make an order in the cart;
- Implemented the Admin module with functionality to manage the products. The Admin module is lazy-loaded if user is signed up;
- Used the LocalStorageService to store ordered products;
