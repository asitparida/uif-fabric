import { Component, Input } from '@angular/core';
import { OrgChartGroup } from '../uif-persona-card/uif-persona-card.models';

@Component({
	selector: 'uif-org-chart',
	templateUrl: './uif-org-chart.component.html',
	styleUrls: [
		'./uif-org-chart.component.scss'
	]
})
export class UifOrgChartComponent {
	@Input() orgChartGroups: OrgChartGroup[];
}
