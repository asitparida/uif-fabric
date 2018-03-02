import {
	Component, AfterViewInit, ContentChildren, QueryList,
	OnChanges, Input, ElementRef, EventEmitter, Output, OnDestroy
} from '@angular/core';
import { UifCarouselService } from './uif-carousel.service';
import { UifCarouselItemComponent } from './uif-carousel-item.component';
import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/operator/debounceTime';
import { EventSubscribers } from '../helpers';

@Component({
	selector: 'uif-carousel',
	templateUrl: './uif-carousel.component.html',
	styleUrls: [
		'./uif-carousel.component.scss',
		'../uif-fabric.shared.scss'
	],
	providers: [UifCarouselService]
})
export class UifCarouselComponent implements AfterViewInit, OnChanges, OnDestroy {
	isPlaying = true;
	@Input() activeIndex = null;
	@Output() activeIndexChange = new EventEmitter<number>();
	@Input() autoPlay = true;
	@Input() delay = 2500;
	@ContentChildren(UifCarouselItemComponent) carouselItems: QueryList<UifCarouselItemComponent>;
	private initialized = false;
	private eventSubscribers: EventSubscribers = new EventSubscribers();
	constructor(
		private carouselService: UifCarouselService,
		private elRef: ElementRef
	) { }
	ngOnChanges() {
		if (this.initialized) {
			this.carouselService.loadItems(this.carouselItems, this.delay, this.autoPlay);
		}
	}
	ngOnDestroy() {
		this.eventSubscribers.clearSubscribers();
	}
	ngAfterViewInit() {
		this.carouselService.activeIndex$.subscribe((index: number) => {
			this.activeIndex = index;
			this.activeIndexChange.emit(this.activeIndex);
		});
		this.carouselService.isPlaying$.subscribe((isPlaying: boolean) => {
			this.isPlaying = isPlaying;
		});
		this.carouselItems.changes.subscribe((items) => {
			this.carouselService.loadItems(this.carouselItems, this.delay, this.autoPlay);
		});
		setTimeout(() => {
			this.carouselService.loadItems(this.carouselItems, this.delay, this.autoPlay);
		});
		if (this.elRef) {
			const self = this;
			this.eventSubscribers.clearSubscribers();
			this.eventSubscribers.pushSubscriber({
				name: 'onMouseOverListener',
				subscripiton: Observable.fromEvent(this.elRef.nativeElement, 'mouseover')
					.subscribe(($event: MouseEvent) => {
						if (this.isPlaying) {
							this.carouselService.resetIntervalTimer();
						}
					}),
				meta: 'carousel'
			});
			this.eventSubscribers.pushSubscriber({
				name: 'onMouseLeaveListener',
				subscripiton: Observable.fromEvent(this.elRef.nativeElement, 'mouseleave')
					.subscribe(($event: MouseEvent) => {
						if (this.isPlaying) {
							this.carouselService.setIntervalTimer();
						}
					}),
				meta: 'carousel'
			});
		}
		this.initialized = true;
	}
	togglePlaying() {
		this.carouselService.togglePlaying();
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
