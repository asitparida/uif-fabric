import { Component, Input, ContentChild, TemplateRef } from '@angular/core';
import { UifIconDir } from '../uif-icon/uif-icon.models';
import { NgForOfContext } from '@angular/common';

@Component({
	selector: 'uif-tree-table-column',
	template: `
	<ng-template let-row>
		<ng-content></ng-content>
	</ng-template>
  `,
})
export class UifTreeTableColumnComponent {
	@Input() column;
	@Input() classes;
	@Input() columnTitle;
	@ContentChild(TemplateRef) rowTemplate: TemplateRef<NgForOfContext<any>>;
}

@Component({
	selector: 'uif-tree-table-content',
	templateUrl: './uif-tree-table-content.component.html',
	styleUrls: [ './uif-tree-table-content.component.scss' ]
})
export class UifTreeTableContentComponent  {
	@Input() rows: any[];
	@Input() columns;
	@Input() classes;
	@Input() level = 0;
	UifIconDirs = UifIconDir;
	get hasChildren() {
		let result = false;
		this.rows.forEach((row: any) => {
			if (row.children && row.children.length > 0) {
				result = true;
			}
		});
		return result;
	}
}
