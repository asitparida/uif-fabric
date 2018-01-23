import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { DemoModule } from './demo/demo.module';

import { AppComponent } from './app.component';
import { DemoerComponent, DemoerService } from './demoer/demoer.component';


@NgModule({
	declarations: [
		AppComponent,
		DemoerComponent
	],
	imports: [
		BrowserModule,
		HttpModule,
		DemoModule
	],
	providers: [
		DemoerService
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
