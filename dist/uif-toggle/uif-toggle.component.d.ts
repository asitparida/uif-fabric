import { OnChanges } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
export declare class UifToggleComponent implements OnChanges, ControlValueAccessor {
    id: string;
    name: any;
    description: any;
    onLabel: string;
    offLabel: string;
    _value: boolean | Boolean;
    disabled: boolean;
    value: boolean | Boolean;
    private propagateChange;
    writeValue(obj: any): void;
    registerOnChange(fn: any): void;
    registerOnTouched(): void;
    ngOnChanges(): void;
    onValueChange(): void;
    onKeyUp($event: KeyboardEvent): void;
    getRandomInt(): number;
}
