import { Directive, ElementRef, Input, OnChanges } from '@angular/core';

@Directive({
  selector: '[appAttribute]'
})
export class AttributeDirective implements OnChanges {
  @Input()
  public value: object;

  constructor(private element: ElementRef<HTMLElement>) {}

  public ngOnChanges() {
    for (let key in this.value) {
      this.element.nativeElement.setAttribute(key, this.value[key]);
    }
  }
}
