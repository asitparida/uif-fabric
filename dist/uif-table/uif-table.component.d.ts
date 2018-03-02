import { AfterViewInit, OnChanges, QueryList } from '@angular/core';
import { UifTableService } from './uif-table.service';
import { UifTableTrComponent } from './uif-table-tr.component';
export declare class UifTableComponent implements AfterViewInit, OnChanges {
    private tableService;
    selectable: boolean;
    classes: any;
    tRows: QueryList<UifTableTrComponent>;
    constructor(tableService: UifTableService);
    ngOnChanges(): void;
    ngAfterViewInit(): void;
    init(): void;
}
