import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'uif-toggle',
	templateUrl: './uif-toggle.component.html',
	styleUrls: [ './uif-toggle.component.scss' ]
})
export class UifToggleComponent {
	id = 'toggle-' + this.getRandomInt();
	@Input() description;
	@Input() onLabel = 'On';
	@Input() offLabel = 'Off';
	@Input() value: boolean | Boolean = false;
	@Input() disabled = false;
	@Output() valueChange = new EventEmitter<boolean | Boolean>();
	toggle() {
		this.value = !this.value;
		this.valueChange.emit(this.value);
	}
	onKeyUp($event: KeyboardEvent) {
		if ($event.keyCode === 13 || $event.keyCode === 32) {
			this.toggle();
		}
	}
	getRandomInt() {
		return Math.floor(Math.random() * 1000000);
	}
}
