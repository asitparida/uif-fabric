import { EventEmitter, ElementRef } from '@angular/core';
export declare class UifCarouselItemComponent {
    private elemRef;
    private _id;
    active: boolean;
    activeChange: EventEmitter<boolean | Boolean>;
    constructor(elemRef: ElementRef);
    getId(): any;
    setId(val: any): void;
    emitOpenChange(): void;
    processForClass(dir?: string): void;
}
