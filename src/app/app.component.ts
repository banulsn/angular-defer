import {Component, signal, WritableSignal} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterOutlet} from '@angular/router';
import {RedComponent} from './red-component/red-component';
import {GreenComponent} from './green-component/green-component';
import {BlueComponent} from "./blue-component/blue-component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RedComponent, GreenComponent, BlueComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isCheckedDefer: WritableSignal<boolean> = signal(false);
}
