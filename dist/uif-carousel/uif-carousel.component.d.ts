import { AfterViewInit, QueryList, OnChanges, ElementRef, EventEmitter, OnDestroy } from '@angular/core';
import { UifCarouselService } from './uif-carousel.service';
import { UifCarouselItemComponent } from './uif-carousel-item.component';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/operator/debounceTime';
export declare class UifCarouselComponent implements AfterViewInit, OnChanges, OnDestroy {
    private carouselService;
    private elRef;
    isPlaying: boolean;
    activeIndex: any;
    activeIndexChange: EventEmitter<number>;
    autoPlay: boolean;
    delay: number;
    carouselItems: QueryList<UifCarouselItemComponent>;
    private initialized;
    private eventSubscribers;
    constructor(carouselService: UifCarouselService, elRef: ElementRef);
    ngOnChanges(): void;
    ngOnDestroy(): void;
    ngAfterViewInit(): void;
    togglePlaying(): void;
    activateItem(i: any): void;
    activateNext(): void;
    activatePrevious(): void;
}
