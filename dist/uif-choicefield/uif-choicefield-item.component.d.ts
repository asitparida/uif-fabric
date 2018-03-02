import { OnInit } from '@angular/core';
import { UifChoicefieldService } from './uif-choicefield.service';
export declare class UifChoicefieldItemComponent implements OnInit {
    private choicefieldService;
    id: string;
    value: any;
    disabled: boolean;
    checked: any;
    constructor(choicefieldService: UifChoicefieldService);
    ngOnInit(): void;
    onValueChange(): void;
    onKeyUp($event: KeyboardEvent): void;
}
