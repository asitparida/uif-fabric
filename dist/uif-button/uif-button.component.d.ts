import { ElementRef, OnChanges, SimpleChanges } from '@angular/core';
export declare class UifButtonComponent implements OnChanges {
    private elRef;
    primary: boolean;
    icon: any;
    disabled: boolean;
    outline: boolean;
    constructor(elRef: ElementRef);
    ngOnChanges(changes: SimpleChanges): void;
    readonly iconName: string;
}
