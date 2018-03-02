import { Component, OnInit, Input } from '@angular/core';
import { UifChoicefieldService } from './uif-choicefield.service';
import { GetRandomInt } from '../helpers';

@Component({
	selector: 'uif-choicefield-item, [uifChoicefieldItem]',
	templateUrl: './uif-choicefield-item.component.html'
})
export class UifChoicefieldItemComponent implements OnInit {
	id = 'cb-' + GetRandomInt();
	@Input() value;
	@Input() disabled = false;
	checked;
	constructor(
		private choicefieldService: UifChoicefieldService
	) {
	}
	ngOnInit() {
		this.choicefieldService.selectedValue$.subscribe((value) => {
			if (this.value !== value) {
				this.checked = false;
			}
		});
	}
	onValueChange() {
		if (this.checked) {
			this.choicefieldService.selectedValue.next(this.value);
		}
	}
	onKeyUp($event: KeyboardEvent) {
		if ($event.keyCode === 13 || $event.keyCode === 32) {
		}
	}
}
