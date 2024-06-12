import { Directive, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[confirm]',
  standalone: true,
})
export class ConfirmDirective {
  @Input('confirm') message = '';
  @Input() confirmUsername = ''

  @HostListener('click')
  openDialog() {
    const bool = window.confirm(this.message + ' ' + this.confirmUsername);
    console.log(bool);
  }
}
