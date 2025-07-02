import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-primary-button',
  imports: [CommonModule],
  templateUrl: './primary-button.component.html',
  styleUrl: './primary-button.component.css'
})
export class PrimaryButtonComponent {

  @Input() label: string = "Primary button"
  @Input() disabled: boolean = false;
  @Input() type: "button"|"submit" = "button"
}
