import {
	Component, AfterViewInit, ContentChildren, QueryList,
	OnChanges, Input, ElementRef, EventEmitter, Output
} from '@angular/core';
import { UifCarouselService } from './uif-carousel.service';
import { UifCarouselItemComponent } from './uif-carousel-item.component';

@Component({
	selector: 'uif-carousel',
	templateUrl: './uif-carousel.component.html',
	styleUrls: ['./uif-carousel.component.scss'],
	providers: [ UifCarouselService ]
})
export class UifCarouselComponent implements AfterViewInit, OnChanges {
	isPlaying = true;
	@Input() activeIndex = null;
	@Output() activeIndexChange = new EventEmitter<number>();
	@Input() autoPlay = true;
	@Input() delay = 2500;
	@ContentChildren(UifCarouselItemComponent) carouselItems: QueryList<UifCarouselItemComponent>;
	private initialized = false;
	constructor(
		private carouselService: UifCarouselService,
		private elRef: ElementRef
	) {}
	ngOnChanges() {
		if (this.initialized) {
			this.carouselService.loadItems(this.carouselItems, this.delay, this.autoPlay);
		}
	}
	ngAfterViewInit() {
		this.carouselService.activeIndexAsObservable.subscribe((index: number) => {
			this.activeIndex = index;
			this.activeIndexChange.emit(this.activeIndex);
		});
		this.carouselItems.changes.subscribe((items) => {
			this.carouselService.loadItems(this.carouselItems, this.delay, this.autoPlay);
		});
		setTimeout(() => {
			this.carouselService.loadItems(this.carouselItems, this.delay, this.autoPlay);
		});
		const elem = this.elRef.nativeElement;
		if (elem) {
			const self = this;
			const onMouseOverListener = () => {
				if (self.isPlaying) {
					self.carouselService.resetIntervalTimer();
				}
			};
			const onMouseLeaveListener = () => {
				if (self.isPlaying) {
					self.carouselService.setIntervalTimer();
				}
			};
			(elem as HTMLElement).removeEventListener('mouseover', onMouseOverListener);
			(elem as HTMLElement).addEventListener('mouseover', onMouseOverListener, false);
			(elem as HTMLElement).removeEventListener('mouseleave', onMouseLeaveListener);
			(elem as HTMLElement).addEventListener('mouseleave', onMouseLeaveListener, false);
		}
		this.initialized = true;
	}
	togglePlaying() {
		this.isPlaying = !this.isPlaying;
		if (this.isPlaying) {
			this.carouselService.setIntervalTimer();
		} else {
			this.carouselService.resetIntervalTimer();
		}
	}
	activateItem(i) {
		this.carouselService.activateItem(i);
	}
	activateNext() {
		this.carouselService.activateNextItem();
	}
	activatePrevious() {
		this.carouselService.activatePreviousItem();
	}
}
