import { Component } from '@angular/core';
import { UifPivotType, UifPivotSize } from '../../../../lib/uif-fabric/uif-fabric';

@Component({
	selector: 'app-pivot-demo',
	templateUrl: './app-pivot-demo.component.html'
})
export class PivotDemoComponent {
	tabs = [
		{ id: 'tab-1', title: 'My files', active: false},
		{ id: 'tab-2', title: 'Recent', active: true, icon: 'ms-Icon--Cat'},
		{ id: 'tab-3', title: 'Shared with me', active: false}
	];
	pivotType = UifPivotType.Regular;
	pivotTypeHints = [
		{ key: UifPivotType.Regular, text: 'Regular'},
		{ key: UifPivotType.Tabs, text: 'Tabs'}
	];
	pivotSize = UifPivotSize.Large;
	pivotSizeHints = [
		{ key: UifPivotSize.Default, text: 'Default'},
		{ key: UifPivotSize.Large, text: 'Large'}
	];
	getPivotJson() {
		return this.tabs.map((option: any) => {
			return ` \n id: ${option.id}, title: ${option.title}, active: ${option.active}, icon: ${option.icon}`;
		});
	}
}
