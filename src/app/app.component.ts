import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
	title = 'app';
	maxDisplayedItems = null;
	breadcrumbItems = [
		{ text: 'Files', 'key': 'Files' },
		{ text: 'Folder 1', 'key': 'f1' },
		{ text: 'Folder 2', 'key': 'f2' },
		{ text: 'Folder 3', 'key': 'f3' },
		{ text: 'Folder 4', 'key': 'f4' },
		{ text: 'Folder 5', 'key': 'f5' },
		{ text: 'Folder 6', 'key': 'f6' },
	];
	toggleBreacrumbMaxItems() {
		if (this.maxDisplayedItems === 3) {
			this.maxDisplayedItems = null;
		} else {
			this.maxDisplayedItems = 3;
		}
	}
}
