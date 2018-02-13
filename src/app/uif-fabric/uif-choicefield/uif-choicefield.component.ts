import {
	Component, Input, Output, EventEmitter,
	forwardRef, OnChanges, ContentChildren,
	QueryList, AfterViewInit, ChangeDetectorRef, OnInit
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { ViewChildren } from '@angular/core/src/metadata/di';
import { UifChoicefieldService } from './uif-choicefield.service';
import { UifChoicefieldItemComponent } from './uif-choicefield-item.component';
import { GetRandomInt } from '../helpers';

@Component({
	selector: 'uif-choicefield',
	templateUrl: './uif-choicefield.component.html',
	styleUrls: ['./uif-choicefield.component.scss'],
	providers: [
		{
			provide: NG_VALUE_ACCESSOR,
			useExisting: forwardRef(() => UifChoicefieldComponent),
			multi: true,
		},
		UifChoicefieldService
	]
})
export class UifChoicefieldComponent implements OnChanges, ControlValueAccessor, AfterViewInit, OnInit {
	id = 'cb-' + GetRandomInt();
	@ContentChildren(UifChoicefieldItemComponent) choiceFieldItems: QueryList<UifChoicefieldItemComponent> = null;
	@Input() label = '';
	@Input() _value;
	get value() {
		return this._value;
	}
	set value(val) {
		this._value = val;
		this.propagateChange(val);
	}
	constructor(
		private choicefieldService: UifChoicefieldService
	) {
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
	public registerOnTouched() { }
	ngOnInit() {
		this.choicefieldService.selectedValueAsObservable.subscribe((value) => {
			this.value = value;
		});
	}
	ngAfterViewInit() {
		this.choiceFieldItems.changes.subscribe((_choiceFieldItems) => {
			this.init();
		});
		setTimeout(() => {
			this.init();
		});
	}
	init() {
		this.choiceFieldItems.forEach((choicefield: UifChoicefieldItemComponent) => {
			choicefield.checked = choicefield.value === this.value && !choicefield.disabled;
		});
	}
	ngOnChanges() {
		// this.onValueChange();
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
}
