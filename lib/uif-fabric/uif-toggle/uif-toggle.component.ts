import { Component, Input, Output, EventEmitter, forwardRef, OnChanges } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
	selector: 'uif-toggle',
	templateUrl: './uif-toggle.component.html',
	styleUrls: ['./uif-toggle.component.scss'],
	providers: [
		{
			provide: NG_VALUE_ACCESSOR,
			useExisting: forwardRef(() => UifToggleComponent),
			multi: true,
		}]
})
export class UifToggleComponent implements OnChanges, ControlValueAccessor {
	id = 'toggle-' + this.getRandomInt();
	@Input() name;
	@Input() description;
	@Input() onLabel = 'On';
	@Input() offLabel = 'Off';
	@Input() _value: boolean | Boolean = false;
	@Input() disabled = false;
	get value() {
		return this._value;
	}
	set value(val) {
		this._value = val;
		this.propagateChange(val);
	}
	private propagateChange = (_: any) => { };
	public writeValue(obj: any) {
		if (obj) {
			this._value = obj;
		}
	}
	public registerOnChange(fn: any) {
		this.propagateChange = fn;
	}
	public registerOnTouched() {}
	ngOnChanges() {
		if (!this.name) {
			this.name = this.id;
		}
		this.onValueChange();
	}
	onValueChange() {
		this.propagateChange(this._value);
	}
	onKeyUp($event: KeyboardEvent) {
		if ($event.keyCode === 13 || $event.keyCode === 32) {
			this._value = !this._value;
			this.onValueChange();
		}
	}
	getRandomInt() {
		return Math.floor(Math.random() * 1000000);
	}
}
