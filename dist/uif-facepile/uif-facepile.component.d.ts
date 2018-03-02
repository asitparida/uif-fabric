import { EventEmitter } from '@angular/core';
import { UifFacepileCard } from './uif-facepile.models';
export declare class UifFacepileComponent {
    showFacePileAddButton: boolean;
    facepileCards: UifFacepileCard[];
    overflowLimit: number;
    facepileAddClick: EventEmitter<MouseEvent>;
    facepileOverflowClick: EventEmitter<MouseEvent>;
    showHeader: boolean;
    showArrow: boolean;
    showActions: boolean;
    contentClasses: string;
    calloutClasses: string;
    toggleFacePiles(card: UifFacepileCard): void;
    onFacepileAddClick($event: MouseEvent): void;
    onFacepileOverflowClick($event: MouseEvent): void;
}
