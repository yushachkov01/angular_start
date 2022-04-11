import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { AttributeDirective } from './attribute.directive';
import { NumberFormatPipe } from './number-format.pipe';
import { TimerService } from './timer.service';
import { DOCUMENT, SET_INTERVAL } from './tokens';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    AttributeDirective,
    NumberFormatPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    TimerService,
    {
      provide: DOCUMENT,
      useValue: document
    },
    {
      provide: SET_INTERVAL,
      useValue: setInterval
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
