import { TemplateRef } from '@angular/core';
import { UifIconDir } from '../uif-icon/uif-icon.models';
import { NgForOfContext } from '@angular/common';
export declare class UifTreeTableColumnComponent {
    column: any;
    classes: any;
    columnTitle: any;
    rowTemplate: TemplateRef<NgForOfContext<any>>;
}
export declare class UifTreeTableContentComponent {
    rows: any[];
    columns: any;
    classes: any;
    level: number;
    UifIconDirs: typeof UifIconDir;
    readonly hasChildren: boolean;
}
