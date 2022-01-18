import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { OpencvAngularService } from '../../projects/opencv-angular-lib/src/public-api';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [OpencvAngularService],
  bootstrap: [AppComponent]
})
export class AppModule { }
