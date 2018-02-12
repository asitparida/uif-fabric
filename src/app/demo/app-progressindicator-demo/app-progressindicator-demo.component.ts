import { Component } from '@angular/core';

@Component({
	selector: 'app-progressindicator-demo',
	templateUrl: './app-progressindicator-demo.component.html'
})
export class ProgressIndicatorDemoComponent {
	width = '50%';
	progress = 50;
	isIndeterminate = true;
	progressHints = [
		{ key: 0, text: '0'},
		{ key: 10, text: '10'},
		{ key: 20, text: '20'},
		{ key: 25, text: '25'},
		{ key: 50, text: '50'},
		{ key: 75, text: '75'},
		{ key: 100, text: '100'},
	];
	widthHints = [
		{ key: '', text: ''},
		{ key: 'auto', text: 'auto'},
		{ key: '33%', text: '33%'},
		{ key: '50%', text: '50%'},
		{ key: '100%', text: '100%'},
		{ key: '250px', text: '250px'},
		{ key: '500px', text: '500px'},
	];
}
