import { OnChanges, QueryList, AfterViewInit, OnInit } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { UifChoicefieldService } from './uif-choicefield.service';
import { UifChoicefieldItemComponent } from './uif-choicefield-item.component';
export declare class UifChoicefieldComponent implements OnChanges, ControlValueAccessor, AfterViewInit, OnInit {
    private choicefieldService;
    id: string;
    choiceFieldItems: QueryList<UifChoicefieldItemComponent>;
    label: string;
    _value: any;
    value: any;
    constructor(choicefieldService: UifChoicefieldService);
    private propagateChange;
    writeValue(obj: any): void;
    registerOnChange(fn: any): void;
    registerOnTouched(): void;
    ngOnInit(): void;
    ngAfterViewInit(): void;
    init(): void;
    ngOnChanges(): void;
    onValueChange(): void;
    onKeyUp($event: KeyboardEvent): void;
}
