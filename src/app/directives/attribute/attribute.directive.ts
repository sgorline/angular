import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appAttribute]',
  standalone: true
})
export class AttributeDirective {

  @Input() appAttribute: string = '';

  constructor(
    private el: ElementRef
  ) {
    this.el.nativeElement.style.backgroundColor = 'blue';
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.el.nativeElement.style.backgroundColor = this.appAttribute;
    this.el.nativeElement.style.cursor = 'pointer';
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.el.nativeElement.style.backgroundColor = 'blue';
  }

}
