import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { UiFabricModule } from './uif-fabric/uif-fabric.module';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    UiFabricModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
