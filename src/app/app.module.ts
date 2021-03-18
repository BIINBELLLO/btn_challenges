import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { ReButtonsComponent } from './components/re-buttons/re-buttons.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonsComponent,
    ReButtonsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
