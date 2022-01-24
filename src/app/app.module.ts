import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { OpencvAngularService } from '../../projects/opencv-angular-lib/src/public-api';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { OpencvideosComponent } from './exs/opencvideos/opencvideos.component';

@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [OpencvAngularService],
  bootstrap: [AppComponent]
})
export class AppModule { }
