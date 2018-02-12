import { Component, Input, ContentChildren, QueryList, AfterViewInit } from '@angular/core';
import { UifPivotItemComponent } from './uif-pivot-item.component';
import { UifPivotService } from './uif-pivot.service';
import { UifPivotType } from './uif-pivot.models';

@Component({
	selector: 'uif-pivot',
	templateUrl: './uif-pivot.component.html',
	styleUrls: ['./uif-pivot.component.scss'],
	providers: [UifPivotService]
})
export class UifPivotComponent implements AfterViewInit {
	@Input() type: UifPivotType = UifPivotType.Regular;
	@Input() showEllipsis = false;
	@ContentChildren(UifPivotItemComponent) pivots: QueryList<UifPivotItemComponent> = null;
	constructor(
		private pivotService: UifPivotService
	) { }
	ngAfterViewInit() {
		this.pivots.changes.subscribe((_pivots) => {
			this.pivotService.loadPivots(_pivots);
		});
		setTimeout(() => {
			this.pivotService.loadPivots(this.pivots);
			this.pivotService.init();
		});
	}
	activatePivot(pivotIndex: number) {
		this.pivotService.activatePivot(pivotIndex);
	}
}
