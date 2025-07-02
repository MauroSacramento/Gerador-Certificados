import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-secondary-button',
  imports: [CommonModule],
  templateUrl: './secondary-button.component.html',
  styleUrl: './secondary-button.component.css'
})
export class SecondaryButtonComponent {

  @Input() label: String = "Secondary Button";
  @Input() iconClass: String = "";

  @Input() disabled: boolean = false;
  @Input() type: "button"|"submit" = "button"
}
