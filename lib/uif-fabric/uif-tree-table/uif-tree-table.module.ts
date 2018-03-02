import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UifTreeTableComponent } from './uif-tree-table.component';
import { UifTreeTableColumnComponent, UifTreeTableContentComponent} from './uif-tree-table-content.component';
import { UifIconModule } from '../uif-icon/uif-icon.module';

const COMPONENTS = [
	UifTreeTableComponent,
	UifTreeTableColumnComponent,
	UifTreeTableContentComponent
];

@NgModule({
	declarations: COMPONENTS,
	imports: [
		CommonModule,
		UifIconModule
	],
	exports: COMPONENTS,
	providers: []
})
export class UifTreeTableModule {
}
