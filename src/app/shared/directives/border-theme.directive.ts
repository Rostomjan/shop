import { Directive, ElementRef, Renderer2, HostListener, Input } from '@angular/core';

const randomHsl = () => 'hsla(' + (Math.floor(Math.random() * 360) + ', 100%, 80%, 1)');

@Directive({
  selector: '[appBorderTheme]'
})
export class BorderThemeDirective {
  @Input() color: string;

  constructor(
    private el: ElementRef,
    private render: Renderer2
  ) { }

  @HostListener('click')
  onClick() {
    this.render.setStyle(this.el.nativeElement, 'background-color', this.color || randomHsl());
  }

}
