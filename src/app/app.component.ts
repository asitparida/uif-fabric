import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { COMPONENTS } from './app.declarations';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
	components: any[] = COMPONENTS.sort((x, y) => x.id.localeCompare(y.id));
	isSummaryActive = false;
	activeComponent = null;
	logs = [];
	constructor(private router: Router) {
	}
	activateComponent(component: any) {
		if (component.id !== 'app-summary') {
			this.router.navigate(['/component/' + component.dir]);

		} else {
			this.router.navigate(['/home']);
		}
	}
	activateSummary() {
		this.router.navigate(['/home']);
	}
}

