import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RedComponent} from './red-component/red-component';
import {GreenComponent} from './green-component/green-component';
import {BlueComponent} from "./blue-component/blue-component";
import {AppComponent} from "./app.component";

@NgModule({
  declarations: [
    AppComponent,
    RedComponent,
    GreenComponent,
    BlueComponent
  ],
  imports: [CommonModule]
})
export class AppModule {
}
