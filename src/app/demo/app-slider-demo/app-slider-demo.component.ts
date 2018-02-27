import { Component } from '@angular/core';

@Component({
	selector: 'app-slider-demo',
	templateUrl: './app-slider-demo.component.html'
})
export class SliderDemoComponent {
	sliderValue = 35;
	sliderStep = 1;
	sliderMaxValue = 100;
	disabled = false;
	booleanHints = [
		{ key: true, text: 'Yes'},
		{ key: false, text: 'No'}
	];
	isVertical = true;
	getStepHints () {
		return [
			{ key: 1, text: '1'},
			{ key: 5, text: '5'},
			{ key: 10, text: '10'},
			{ key: 20, text: '20'},
			{ key: 25, text: '25'}
		];
	}
	setSliderValue() {
		this.sliderValue = 50;
	}
	getBoolean(val): boolean {
		if (typeof val === 'boolean') {
			return val;
		} else {
			return val === 'false' ? false : true;
		}
	}
}
