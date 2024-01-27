import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-red',
  standalone: true,
  templateUrl: 'red-component.html',
  styleUrl: 'red-component.scss'
})
export class RedComponent {
  @Input() text = 'text';
}
