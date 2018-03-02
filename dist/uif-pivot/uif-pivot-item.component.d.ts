import { EventEmitter, ElementRef, AfterViewInit } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { UifPivotService } from './uif-pivot.service';
export declare class UifPivotTitleComponent {
}
export declare class UifPivotContentComponent {
}
export declare class UifPivotItemComponent implements AfterViewInit {
    private sanitizer;
    private pivotService;
    title: ElementRef;
    active: boolean | Boolean;
    activeChange: EventEmitter<boolean | Boolean>;
    pivotLoaded: EventEmitter<{}>;
    private id;
    constructor(sanitizer: DomSanitizer, pivotService: UifPivotService);
    ngAfterViewInit(): void;
    getId(): string;
    setId(id: any): void;
    getTitle(): SafeHtml;
}
