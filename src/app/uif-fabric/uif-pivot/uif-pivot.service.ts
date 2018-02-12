import { Injectable, QueryList } from '@angular/core';
import { UifPivotItemComponent } from './uif-pivot-item.component';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class UifPivotService {
	private pivotsCollection: QueryList<UifPivotItemComponent>;
	private activePivotIndexSubject: Subject<number> = new Subject<number>();
	private activePivotIndex: number;
	private activePivotId: Subject<string> = new Subject<string>();
	activePivotIdObservable = this.activePivotId.asObservable();
	loadPivots(pivots) {
		this.pivotsCollection = pivots;
		this.initialize();
	}
	init() {
		const activePivot = this.pivotsCollection.find( (pivot: UifPivotItemComponent) => pivot.active === true);
		if (!activePivot) {
			this.pivotsCollection.forEach((pivot: UifPivotItemComponent, index: number) => {
				pivot.active = index === 0;
				if (index === 0) {
					this.activePivotIndex = 0;
					this.activePivotId.next(pivot.getId());
				}
			});
		} else {
			this.pivotsCollection.forEach((pivot: UifPivotItemComponent, index: number) => {
				if (pivot.active) {
					this.activePivotIndex = index;
					this.activePivotId.next(pivot.getId());
				}
			});
		}
		this.activePivotIndexSubject.next(this.activePivotIndex);
	}
	initialize() {
		this.pivotsCollection.forEach((pivot: UifPivotItemComponent, index: number) => {
			if (!pivot.getId()) {
				pivot.setId('page_' + this.getRandomInt());
			}
		});
	}
	activatePivot(pivotIndex: number): number {
		let result = null;
		this.pivotsCollection.forEach((pivot: UifPivotItemComponent, index: number) => {
			pivot.active = index === pivotIndex;
			if (index === pivotIndex) {
				this.activePivotIndex = index;
				this.activePivotId.next(pivot.getId());
				result = this.activePivotIndex;
			}
			pivot.activeChange.emit(pivot.active);
		});
		this.activePivotIndexSubject.next(this.activePivotIndex);
		return result;
	}
	getRandomInt() {
		return Math.floor(Math.random() * 1000000);
	}
}
