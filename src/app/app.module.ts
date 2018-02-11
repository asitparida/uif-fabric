import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule  } from '@angular/common/http';
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
		HttpClientModule,
		DemoModule
	],
	providers: [
		DemoerService
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
