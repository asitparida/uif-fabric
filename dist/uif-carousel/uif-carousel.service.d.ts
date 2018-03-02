import { QueryList } from '@angular/core';
import { UifCarouselItemComponent } from './uif-carousel-item.component';
import { Observable } from 'rxjs/Observable';
export declare class UifCarouselService {
    private activeIndex;
    private activeIndexSubject;
    private carouselItems;
    private intervalTimer;
    private timerDelay;
    private isPlaying;
    private isPlayingSubject;
    activeIndex$: Observable<number>;
    isPlaying$: Observable<boolean>;
    loadItems(items: QueryList<UifCarouselItemComponent>, timerDelay?: number, autoPlay?: boolean): void;
    resetIntervalTimer(): void;
    setIntervalTimer(): void;
    activateNextItem(): void;
    activatePreviousItem(): void;
    activateItem(index: any, dir?: string): void;
    togglePlaying(): void;
}
