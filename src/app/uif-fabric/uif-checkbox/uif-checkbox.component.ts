import { Component, Input, Output, EventEmitter, forwardRef, OnChanges } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
	selector: 'uif-checkbox',
	templateUrl: './uif-checkbox.component.html',
	styleUrls: ['./uif-checkbox.component.scss'],
	providers: [
		{
			provide: NG_VALUE_ACCESSOR,
			useExisting: forwardRef(() => UifCheckboxComponent),
			multi: true,
		}]
})
export class UifCheckboxComponent implements OnChanges, ControlValueAccessor {
	id = 'cb-' + this.getRandomInt();
	@Input() name;
	@Input() label = 'On';
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
