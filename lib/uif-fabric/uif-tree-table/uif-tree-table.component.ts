import { Component, AfterViewInit, ContentChildren, QueryList, Input, ViewContainerRef } from '@angular/core';
import { UifTreeTableColumnComponent } from './uif-tree-table-content.component';

@Component({
	selector: 'uif-tree-table',
	template:
	`
	<uif-tree-table-content [classes]="classes" [level]="level + 1" [rows]="rows" [columns]="columns"></uif-tree-table-content>
  	`
})
export class UifTreeTableComponent implements AfterViewInit {
	columns = [];
	level = 0;
	@ContentChildren(UifTreeTableColumnComponent) columnComponents: QueryList<UifTreeTableColumnComponent>;
	@Input() classes = '';
	@Input() rows: any[];
	ngAfterViewInit() {
		setTimeout(() => {
			this.columns = this.columnComponents.toArray();
		});
	}
}
