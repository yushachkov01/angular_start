import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { AttributeDirective } from './attribute.directive';
import { NumberFormatPipe } from './number-format.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    AttributeDirective,
    NumberFormatPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
