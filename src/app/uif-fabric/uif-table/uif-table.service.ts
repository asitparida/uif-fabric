import { Injectable, QueryList } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { UifTableTrComponent } from './uif-table-tr.component';

@Injectable()
export class UifTableService {
	allSelected = new Subject<Boolean | boolean>();
	allSelectedAsObservable = this.allSelected.asObservable();
	setAllSelectedAsFalse = new Subject<Boolean | boolean>();
	setAllSelectedAsFalseObservable = this.setAllSelectedAsFalse.asObservable();
	theadRows: QueryList<UifTableTrComponent>;
	tbodyRows: QueryList<UifTableTrComponent>;
	headerRowSelectionChange(id: string) {
		const headerRow = this.theadRows.find( row => row.id === id);
		if (headerRow) {
			this.tbodyRows.forEach((row: UifTableTrComponent) => {
				row.selected = headerRow.selected;
				row.onSelectionChange();
			});
		}
	}
	bodyRowSelectionChange(id: string) {
		let result = true;
		this.tbodyRows.forEach((row: UifTableTrComponent) => {
			result = result && row.selected;
		});
		this.theadRows.forEach((row: UifTableTrComponent) => {
			row.selected = result;
			row.onSelectionChange();
		});
	}
}
