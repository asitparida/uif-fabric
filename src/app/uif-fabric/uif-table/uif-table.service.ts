import { Injectable, QueryList } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { UifTableTrComponent } from './uif-table-tr.component';

@Injectable()
export class UifTableService {
	allSelected = new Subject<Boolean | boolean>();
	allSelectedAsObservable = this.allSelected.asObservable();
	setAllSelectedAsFalse = new Subject<Boolean | boolean>();
	setAllSelectedAsFalseObservable = this.setAllSelectedAsFalse.asObservable();
	tRows: QueryList<UifTableTrComponent>;
	headerRowSelectionChange(id: string) {
		const headerRow = this.tRows.find( row => row.id === id);
		if (headerRow) {
			this.tRows.forEach((row: UifTableTrComponent) => {
				if (!row.isHeader) {
					row.selected = headerRow.selected;
					row.onSelectionChange();
				}
			});
		}
	}
	bodyRowSelectionChange(id: string) {
		let result = true;
		this.tRows.forEach((row: UifTableTrComponent) => {
			if (!row.isHeader) {
				result = result && row.selected;
			}
		});
		this.tRows.forEach((row: UifTableTrComponent) => {
			if (row.isHeader) {
				row.selected = result;
				row.onSelectionChange();
			}
		});
	}
}
