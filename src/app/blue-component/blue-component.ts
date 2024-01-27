import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-blue',
  standalone: true,
  templateUrl: 'blue-component.html',
  styleUrl: 'blue-component.scss'
})
export class BlueComponent {
  @Input() text = 'text';
}
