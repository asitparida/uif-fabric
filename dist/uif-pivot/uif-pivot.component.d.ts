import { QueryList, AfterViewInit } from '@angular/core';
import { UifPivotItemComponent } from './uif-pivot-item.component';
import { UifPivotService } from './uif-pivot.service';
import { UifPivotType, UifPivotSize } from './uif-pivot.models';
export declare class UifPivotComponent implements AfterViewInit {
    private pivotService;
    type: UifPivotType;
    size: UifPivotSize;
    showEllipsis: boolean;
    pivots: QueryList<UifPivotItemComponent>;
    constructor(pivotService: UifPivotService);
    ngAfterViewInit(): void;
    activatePivot(pivotIndex: number): void;
}
