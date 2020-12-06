import { Directive, HostListener, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appInputFormat]'
})
export class InputFormatDirective {

  @Input() appInputFormat: string;

  constructor(private el: ElementRef) { }

  @HostListener('focus') onFocus() {
    console.log('onFocus');
  }

  @HostListener('blur') onBlur() {
    const value: string = this.el.nativeElement.value;

    switch (this.appInputFormat) {
      case 'lowercase': {
        this.el.nativeElement.value = value.toLowerCase();
        break;
      }
      case 'uppercase': {
        this.el.nativeElement.value = value.toUpperCase();
        break;
      }
    }
  }


}
