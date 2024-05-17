import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  @HostBinding('class.open') isOpenn = false;

  @HostListener('click') toggleOpen() {
    this.isOpenn = !this.isOpenn;
  }
}
