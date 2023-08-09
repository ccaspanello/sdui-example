import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TextComponent } from './components/text/text.component';
import { ButtonComponent } from './components/button/button.component';
import { SduiComponent } from './components/sdui/sdui.component';

@NgModule({
  declarations: [
    AppComponent,
    TextComponent,
    ButtonComponent,
    SduiComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
