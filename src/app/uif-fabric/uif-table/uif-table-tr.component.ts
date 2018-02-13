import { Component, OnChanges, ElementRef, Input, EventEmitter, Output } from '@angular/core';
import { GetRandomInt } from '../helpers';
import { UifTableService } from './uif-table.service';

@Component({
	selector: 'uif-table tr',
	template:
	`
	<th class="ms-Table-rowCheck" [hidden]="!selectable" (click)="onClick()"></th>
	<ng-content></ng-content>
	`
})
export class UifTableTrComponent implements OnChanges {
	id = 'tr_' + GetRandomInt();
	selectable = false;
	isHeader = false;
	constructor(
		private elRef: ElementRef,
		private tableService: UifTableService
	) {}
	@Input() selected = false;
	@Output() selectedChange = new EventEmitter<boolean | Boolean>();
	ngOnChanges() {
		this.rowClasslistChange();
	}
	rowClasslistChange() {
		if (this.elRef) {
			const row = this.elRef.nativeElement;
			if (row) {
				if (this.selected && this.selectable) {
					(row as HTMLTableRowElement).classList.add('is-selected');
				} else {
					(row as HTMLTableRowElement).classList.remove('is-selected');
				}
			}
		}
	}
	onClick() {
		this.selected = !this.selected;
		this.onSelectionChange();
		if (this.isHeader) {
			this.tableService.headerRowSelectionChange(this.id);
		} else {
			this.tableService.bodyRowSelectionChange(this.id);
		}
	}
	onSelectionChange() {
		this.selectedChange.emit(this.selected);
	}
}
