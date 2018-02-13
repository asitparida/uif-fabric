import { Component, AfterViewInit, ContentChildren, QueryList } from '@angular/core';
import { UifTableTrComponent } from './uif-table-tr.component';
import { UifTableService } from './uif-table.service';

@Component({
	selector: 'uif-table thead',
	template:
	`
	<ng-content></ng-content>
	`
})
export class UifTableTheadComponent implements AfterViewInit {
	selectable = false;
	@ContentChildren(UifTableTrComponent) theadRows: QueryList<UifTableTrComponent>;
	constructor(
		private tableService: UifTableService
	) {}
	ngAfterViewInit() {
		this.theadRows.changes.subscribe((rows: UifTableTrComponent[]) => {
			this.init();
		});
		setTimeout(() => {
			this.init();
		});
	}
	init() {
		this.theadRows.forEach((row: UifTableTrComponent) => {
			row.isHeader = true;
		});
		this.tableService.theadRows = this.theadRows;
	}
}
