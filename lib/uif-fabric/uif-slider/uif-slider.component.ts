import {
	Component, ViewChild, AfterViewInit, Input, Output,
	EventEmitter, ElementRef, HostListener, OnChanges,
	SimpleChanges, OnDestroy
} from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/throttleTime';
import { Subscription } from 'rxjs/Subscription';
import { EventSubscribers } from '../helpers';

@Component({
	selector: 'uif-slider',
	templateUrl: './uif-slider.component.html',
	styleUrls: ['./uif-slider.component.scss']
})
export class UifSliderComponent implements AfterViewInit, OnChanges, OnDestroy {
	@Input() value = 0;
	@Output() valueChange = new EventEmitter<number>();
	@Input() step = 1;
	@Input() disabled = false;
	@Input() vertical = false;
	maxValue = 100;
	activeProgress = 0;
	inactiveProgress = 0;
	@ViewChild('slider') slider;
	@ViewChild('sliderThumb') sliderThumb;
	@ViewChild('sliderActive') sliderActive;
	@ViewChild('sliderInactive') sliderInactive;
	private _progress = 0;
	private sliderEl;
	private sliderThumbEl;
	private sliderActiveEl;
	private sliderInactiveEl;
	private sliderIsActive = false;
	private sliderElProps: ClientRect;
	private initialized = false;
	private onKeyDownStream$: Subscription = null;
	private eventSubscribers: EventSubscribers = new EventSubscribers();
	constructor(private elRef: ElementRef) { }
	ngAfterViewInit() {
		this.sliderEl = this.slider.nativeElement;
		this.sliderThumbEl = this.sliderThumb.nativeElement;
		this.sliderActiveEl = this.sliderActive.nativeElement;
		this.sliderInactiveEl = this.sliderInactive.nativeElement;
		this.createListeners();
		this.updateProgress();
		this.initialized = true;
	}
	ngOnChanges(changes: SimpleChanges) {
		if (this.initialized) {
			for (const prop in changes) {
				if (changes[prop]) {
					const change = changes[prop];
					if (prop === 'value') {
						this.updateProgress();
					} else if (prop === 'disabled') {
						this.createListeners();
					}
				}
			}
		}
	}
	ngOnDestroy() {
		this.eventSubscribers.clearSubscribers();
	}
	createListeners() {
		this.eventSubscribers.clearSubscribers();
		const self = this;
		if (this.slider && this.slider.nativeElement && !this.disabled) {
			this.sliderElProps = this.sliderEl.getBoundingClientRect();
			this.eventSubscribers.pushSubscriber({
				name: 'onMouseDownListener',
				subscripiton: Observable.fromEvent(this.slider.nativeElement, 'mousedown')
					.subscribe(($event: MouseEvent) => {
						this.sliderIsActive = true;
					}),
				meta: 'slider'
			});
			this.eventSubscribers.pushSubscriber({
				name: 'onMouseClickListener',
				subscripiton: Observable.fromEvent(this.slider.nativeElement, 'click')
					.subscribe(($event: MouseEvent) => {
						this.onSliderThumbMouseMove($event, true);
					}),
				meta: 'slider'
			});
			this.eventSubscribers.pushSubscriber({
				name: 'onKeyDownListener',
				subscripiton: Observable.fromEvent(this.slider.nativeElement, 'keydown')
					.throttleTime(100)
					.subscribe(($event: KeyboardEvent) => {
						if ($event.key === 'ArrowRight' || $event.key === 'ArrowUp') {
							self.onSliderThumbMouseIncrementalMove(true);
						} else if ($event.key === 'ArrowLeft' || $event.key === 'ArrowDown') {
							self.onSliderThumbMouseIncrementalMove(false);
						}
					}),
				meta: 'slider'
			});
			this.eventSubscribers.pushSubscriber({
				name: 'onMouseMoveListener',
				subscripiton: Observable.fromEvent(document, 'mousemove')
					.subscribe(($event: MouseEvent) => {
						this.onSliderThumbMouseMove($event);
					}),
				meta: 'document'
			});
			this.eventSubscribers.pushSubscriber({
				name: 'onMouseUpListener',
				subscripiton: Observable.fromEvent(document, 'mouseup')
					.subscribe(($event: MouseEvent) => {
						setTimeout(() => {
							if (this.sliderIsActive) {
								this.sliderIsActive = false;
							}
						});
					}),
				meta: 'document'
			});
			this.eventSubscribers.pushSubscriber({
				name: 'onResizeListener',
				subscripiton: Observable.fromEvent(window, 'resize')
					.debounceTime(100)
					.subscribe(($event: any) => {
						setTimeout(() => {
							if (this.sliderEl && !this.disabled) {
								this.sliderElProps = this.sliderEl.getBoundingClientRect();
							}
						});
					}),
				meta: 'document'
			});
		}
	}
	onSliderThumbMouseIncrementalMove(isPositiveIncrement = false) {
		let newValue = isPositiveIncrement ? this.value + this.step : this.value - this.step;
		newValue = newValue < 0 ? 0 : newValue;
		newValue = newValue > 100 ? 100 : newValue;
		this.value = newValue;
		this.updateProgress();
		this.valueChange.emit(this.value);
	}
	onSliderThumbMouseMove($event: MouseEvent, forceFalse = false) {
		if (this.sliderIsActive) {
			if (this.sliderElProps) {
				if (!this.vertical) {
					let x = $event.clientX - this.sliderElProps.left;
					x = x < 0 ? 0 : x;
					x = x > this.sliderElProps.width ? this.sliderElProps.width : x;
					const unit = this.sliderElProps.width / (this.maxValue / this.step);
					const xModValue = x % unit;
					x = x - xModValue;
					let xPercent = (x / this.sliderElProps.width) * 100;
					xPercent = Math.round(xPercent);
					this.value = xPercent;
				} else {
					let y = $event.clientY - this.sliderElProps.top;
					y = y < 0 ? 0 : y;
					y = y > this.sliderElProps.height ? this.sliderElProps.height : y;
					const unit = this.sliderElProps.height / (this.maxValue / this.step);
					const yModValue = y % unit;
					y = y - yModValue;
					let yPercent = (y / this.sliderElProps.height) * 100;
					yPercent = Math.round(yPercent);
					this.value = 100 - yPercent;
				}
				this.updateProgress();
				this.valueChange.emit(this.value);
			}
		}
		if (forceFalse) {
			this.sliderIsActive = false;
		}
	}
	updateProgress() {
		const self = this;
		if (self._progress !== self.value) {
			this.activeProgress = (this.value / (this.maxValue)) * 100;
			this.inactiveProgress = ((this.maxValue - this.activeProgress) / (this.maxValue)) * 100;
			if (!this.vertical) {
				window.requestAnimationFrame(() => {
					if (this.sliderThumbEl) {
						(this.sliderThumbEl as HTMLElement).style.left = this.value + '%';
					}
				});
				window.requestAnimationFrame(() => {
					if (this.sliderActiveEl) {
						(this.sliderActiveEl as HTMLElement).style.width = this.activeProgress + '%';
					}
				});
				window.requestAnimationFrame(() => {
					if (this.sliderInactiveEl) {
						(this.sliderInactiveEl as HTMLElement).style.width = this.inactiveProgress + '%';
					}
				});
			} else {
				window.requestAnimationFrame(() => {
					if (this.sliderThumbEl) {
						(this.sliderThumbEl as HTMLElement).style.bottom = this.value + '%';
					}
				});
				window.requestAnimationFrame(() => {
					if (this.sliderActiveEl) {
						(this.sliderActiveEl as HTMLElement).style.height = this.activeProgress + '%';
					}
				});
				window.requestAnimationFrame(() => {
					if (this.sliderInactiveEl) {
						(this.sliderInactiveEl as HTMLElement).style.height = this.inactiveProgress + '%';
					}
				});
			}
			self._progress = self.value;
		}
	}
}
