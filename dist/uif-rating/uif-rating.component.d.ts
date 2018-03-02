import { OnChanges, OnInit, EventEmitter } from '@angular/core';
import { UifRatingModel } from './uif-rating.models';
export declare class UifRatingComponent implements OnChanges, OnInit {
    maxRating: Number;
    rating: Number;
    ratingChange: EventEmitter<Number>;
    disabled: boolean | Boolean;
    icon: string;
    activeColor: string;
    inactiveColor: string;
    size: number;
    stars: UifRatingModel[];
    private _initialized;
    ngOnChanges(): void;
    ngOnInit(): void;
    init(): void;
    initRating(): void;
    changeRating(rating: any): void;
}
