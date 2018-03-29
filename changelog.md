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
