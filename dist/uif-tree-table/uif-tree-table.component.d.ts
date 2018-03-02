import { AfterViewInit, QueryList } from '@angular/core';
import { UifTreeTableColumnComponent } from './uif-tree-table-content.component';
export declare class UifTreeTableComponent implements AfterViewInit {
    columns: any[];
    level: number;
    columnComponents: QueryList<UifTreeTableColumnComponent>;
    classes: string;
    rows: any[];
    ngAfterViewInit(): void;
}
