import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-green',
  standalone: true,
  templateUrl: 'green-component.html',
  styleUrl: 'green-component.scss'
})
export class GreenComponent {
  @Input() text = 'text';
}
