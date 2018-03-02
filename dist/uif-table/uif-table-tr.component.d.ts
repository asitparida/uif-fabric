import { OnChanges, ElementRef, EventEmitter, AfterViewInit } from '@angular/core';
import { UifTableService } from './uif-table.service';
export declare class UifTableTrComponent implements OnChanges, AfterViewInit {
    private elRef;
    private tableService;
    id: string;
    selectable: boolean;
    isHeader: boolean;
    constructor(elRef: ElementRef, tableService: UifTableService);
    selected: boolean;
    selectedChange: EventEmitter<boolean | Boolean>;
    ngOnChanges(): void;
    ngAfterViewInit(): void;
    rowClasslistChange(): void;
    onClick(): void;
    onSelectionChange(): void;
}
