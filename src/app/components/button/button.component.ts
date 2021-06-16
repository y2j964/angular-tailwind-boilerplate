import { Component, Input, Output, EventEmitter } from '@angular/core';

type ButtonVariants =
  | 'btn--primary'
  | 'btn--inverse'
  | 'btn--neutral'
  | 'btn--danger';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent {
  @Input() variant: ButtonVariants = 'btn--primary';
  @Input() isDisabled: boolean = false;
  @Output() handleClick: EventEmitter<any> = new EventEmitter();

  constructor() {}

  onClick() {
    this.handleClick.emit();
  }
}
