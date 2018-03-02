import { EventEmitter, AfterViewInit, OnDestroy } from '@angular/core';
import 'rxjs/add/observable/fromEvent';
import { Subscription } from 'rxjs/Subscription';
export declare class UifChipsComponent implements AfterViewInit, OnDestroy {
    tags: Array<string>;
    tagsChange: EventEmitter<string[]>;
    removeItem: boolean;
    tagInput: any;
    newTag: string;
    onKeyupListener: Subscription;
    activeIndex: any;
    ngOnDestroy(): void;
    ngAfterViewInit(): void;
    clearListener(): void;
    addNewTag(): void;
    removeLastTag(): void;
    removeTag(index: any): void;
    resetActiveStatus(): void;
}
