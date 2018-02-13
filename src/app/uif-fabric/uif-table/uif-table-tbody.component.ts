import { Component, AfterViewInit, ContentChildren, QueryList } from '@angular/core';
import { UifTableTrComponent } from './uif-table-tr.component';
import { UifTableService } from './uif-table.service';

@Component({
	selector: 'uif-table tbody',
	template:
	`
	<ng-content></ng-content>
	`
})
export class UifTableTbodyComponent implements AfterViewInit {
	selectable = false;
	@ContentChildren(UifTableTrComponent) tbodyRows: QueryList<UifTableTrComponent>;
	constructor(
		private tableService: UifTableService
	) {}
	ngAfterViewInit() {
		this.tbodyRows.changes.subscribe((rows: UifTableTrComponent[]) => {
			this.init();
		});
		setTimeout(() => {
			this.init();
		});
	}
	init() {
		this.tableService.tbodyRows = this.tbodyRows;
	}
}
