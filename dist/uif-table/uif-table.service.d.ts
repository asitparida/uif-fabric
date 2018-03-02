import { QueryList } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import { UifTableTrComponent } from './uif-table-tr.component';
export declare class UifTableService {
    allSelected: Subject<boolean | Boolean>;
    allSelected$: Observable<boolean | Boolean>;
    setAllSelectedAsFalse: Subject<boolean | Boolean>;
    setAllSelectedAsFalse$: Observable<boolean | Boolean>;
    tRows: QueryList<UifTableTrComponent>;
    headerRowSelectionChange(id: string): void;
    bodyRowSelectionChange(id: string): void;
}
