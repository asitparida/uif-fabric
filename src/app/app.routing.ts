import { DemoerComponent } from './demoer/demoer.component';
import { AppSummaryComponent } from './app-summary.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
	{ path: 'component/:id', component: DemoerComponent },
	{ path: 'home', component: AppSummaryComponent },
	{
		path: '',
		redirectTo: '/home',
		pathMatch: 'full'
	},
	{ path: '**', component: AppSummaryComponent }
];

@NgModule({
	imports: [
		RouterModule.forRoot(appRoutes)
	],
	exports: [
		RouterModule
	]
})
export class AppRoutingModule {}
