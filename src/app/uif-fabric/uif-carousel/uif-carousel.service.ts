import { Injectable, QueryList } from '@angular/core';
import { UifCarouselItemComponent } from './uif-carousel-item.component';
import { GetRandomInt } from '../helpers';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class UifCarouselService {
	private activeIndex = null;
	private activeIndexSubject = new Subject<number>();
	private carouselItems: QueryList<UifCarouselItemComponent>;
	private intervalTimer = null;
	private timerDelay = 2500;
	activeIndexAsObservable = this.activeIndexSubject.asObservable();
	loadItems(items: QueryList<UifCarouselItemComponent>, timerDelay = 2500, autoPlay = true) {
		this.timerDelay = 2500;
		this.carouselItems = items;
		this.carouselItems.forEach((item: UifCarouselItemComponent, index) => {
			item.setId('crsl_item_' + GetRandomInt());
		});
		const activeItem = this.carouselItems.find(x => x.active as boolean);
		this.carouselItems.forEach((item: UifCarouselItemComponent, index) => {
			if (activeItem) {
				item.active = item.getId() === activeItem.getId();
			} else {
				item.active = index === 0;
			}
			if (item.active) {
				this.activeIndex = index;
				this.activeIndexSubject.next(this.activeIndex);
			}
			item.emitOpenChange();
		});
		this.resetIntervalTimer();
		if (autoPlay) {
			this.setIntervalTimer();
		}
	}
	resetIntervalTimer() {
		if (this.intervalTimer) {
			clearInterval(this.intervalTimer);
			this.intervalTimer = null;
		}
	}
	setIntervalTimer() {
		this.intervalTimer = setInterval(() => {
			this.activateNextItem();
		}, this.timerDelay);
	}
	activateNextItem() {
		let nextIndex = this.activeIndex + 1;
		nextIndex =  nextIndex >= this.carouselItems.length ? 0 : nextIndex;
		this.activateItem(nextIndex);
	}
	activatePreviousItem() {
		let nextIndex = this.activeIndex - 1;
		nextIndex =  nextIndex < 0 ? this.carouselItems.length - 1 : nextIndex;
		this.activateItem(nextIndex);
	}
	activateItem(index) {
		this.carouselItems.forEach((item: UifCarouselItemComponent, iter) => {
			item.active = iter === index;
			item.emitOpenChange();
		});
		this.activeIndex = index;
		this.activeIndexSubject.next(this.activeIndex);
	}
}
