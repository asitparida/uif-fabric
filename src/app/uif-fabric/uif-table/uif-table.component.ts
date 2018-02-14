import {
	Component, AfterViewInit, OnChanges, Input, ContentChildren, QueryList
} from '@angular/core';
import { UifTableService } from './uif-table.service';
import { GetRandomInt } from '../helpers';
import { UifTableTrComponent } from './uif-table-tr.component';

@Component({
	selector: 'uif-table',
	templateUrl: './uif-table.component.html',
	providers: [ UifTableService ]
})
export class UifTableComponent implements AfterViewInit, OnChanges {
	@Input() selectable = false;
	@ContentChildren(UifTableTrComponent) tRows: QueryList<UifTableTrComponent>;
	constructor(
		private tableService: UifTableService
	) {}
	ngOnChanges() {
		this.init();
	}
	ngAfterViewInit() {
		this.tRows.changes.subscribe((tRows: UifTableTrComponent) => {
			this.init();
		});
		setTimeout(() => {
			this.init();
		});
	}
	init() {
		if (this.tRows && this.tRows.length > 0) {
			this.tableService.tRows = this.tRows;
			this.tRows.forEach((row: UifTableTrComponent) => {
				row.selectable = this.selectable;
				row.rowClasslistChange();
			});
		}
	}
}
