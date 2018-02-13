import {
	Component, AfterViewInit, OnChanges, Input, ContentChildren, QueryList
} from '@angular/core';
import { UifTableService } from './uif-table.service';
import { GetRandomInt } from '../helpers';
import { UifTableTbodyComponent } from './uif-table-tbody.component';
import { UifTableTheadComponent } from './uif-table-thead.component';
import { UifTableTrComponent } from './uif-table-tr.component';

@Component({
	selector: 'uif-table',
	templateUrl: './uif-table.component.html',
	providers: [ UifTableService ]
})
export class UifTableComponent implements AfterViewInit, OnChanges {
	@Input() selectable = false;
	@ContentChildren(UifTableTheadComponent) theads: QueryList<UifTableTheadComponent>;
	@ContentChildren(UifTableTbodyComponent) tbodies: QueryList<UifTableTbodyComponent>;
	constructor(
		private tableService: UifTableService
	) {}
	ngOnChanges() {
		this.init();
	}
	ngAfterViewInit() {
		this.theads.changes.subscribe((theads: UifTableTbodyComponent) => {
			this.initHeads();
		});
		this.tbodies.changes.subscribe((tbodies: UifTableTbodyComponent) => {
			this.initBodies();
		});
		setTimeout(() => {
			this.init();
		});
	}
	init() {
		this.initHeads();
		this.initBodies();
	}
	initHeads() {
		if (this.theads && this.theads.length > 0) {
			this.theads.forEach((thead: UifTableTheadComponent) => {
				if (thead.theadRows.length > 0) {
					thead.theadRows.forEach((row: UifTableTrComponent) => {
						row.selectable = this.selectable;
						row.rowClasslistChange();
					});
				}
			});
		}
	}
	initBodies() {
		if (this.tbodies && this.tbodies.length > 0) {
			this.tbodies.forEach((tbody: UifTableTbodyComponent) => {
				if (tbody.tbodyRows.length > 0) {
					tbody.tbodyRows.forEach((row: UifTableTrComponent) => {
						row.selectable = this.selectable;
						row.rowClasslistChange();
					});
				}
			});
		}
	}
}
