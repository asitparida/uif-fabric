import {
	Component, ViewChild, AfterViewInit, Input, Output,
	EventEmitter, ElementRef, HostListener, OnChanges
} from '@angular/core';
import { SimpleChanges, OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/throttleTime';
import { Subscription } from 'rxjs/Subscription';

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
	private eventListeners: any = {};
	private sliderEl;
	private sliderThumbEl;
	private sliderActiveEl;
	private sliderInactiveEl;
	private sliderIsActive = false;
	private sliderElProps: ClientRect;
	private initialized = false;
	private onKeyDownStream$: Subscription = null;
	constructor(private elRef: ElementRef) { }
	ngAfterViewInit() {
		this.sliderEl = this.slider.nativeElement;
		this.sliderThumbEl = this.sliderThumb.nativeElement;
		this.sliderActiveEl = this.sliderActive.nativeElement;
		this.sliderInactiveEl = this.sliderInactive.nativeElement;
		this.createListeners();
		this.addListeners();
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
						this.clearListeners();
						this.addListeners();
					}
				}
			}
		}
	}
	ngOnDestroy() {
		if (this.onKeyDownStream$) {
			this.onKeyDownStream$.unsubscribe();
			this.onKeyDownStream$ = null;
		}
		this.clearListeners();
	}
	createListeners() {
		const self = this;
		const onMouseDownListener = ($event: MouseEvent) => {
			self.sliderIsActive = true;
		};
		this.eventListeners['onMouseDownListener'] = onMouseDownListener;
		const onMouseClickListener = ($event: MouseEvent) => {
			self.onSliderThumbMouseMove($event, true);
		};
		this.eventListeners['onMouseClickListener'] = onMouseClickListener;
		const onMouseMoveListener = ($event: MouseEvent) => {
			self.onSliderThumbMouseMove($event);
		};
		this.eventListeners['onMouseMoveListener'] = onMouseMoveListener;
		const onMouseUpListener = ($event: MouseEvent) => {
			setTimeout(() => {
				if (self.sliderIsActive) {
					self.sliderIsActive = false;
				}
			});
		};
		this.eventListeners['onMouseUpListener'] = onMouseUpListener;
		const onKeyDownStream = new Subject<KeyboardEvent>();
		const onKeyDownListener = ($event: KeyboardEvent) => {
			onKeyDownStream.next($event);
		};
		if (this.onKeyDownStream$) {
			this.onKeyDownStream$.unsubscribe();
			this.onKeyDownStream$ = null;
		}
		this.onKeyDownStream$ = onKeyDownStream.asObservable().throttleTime(100).subscribe(($event: KeyboardEvent) => {
			if ($event.key === 'ArrowRight' || $event.key === 'ArrowUp') {
				self.onSliderThumbMouseIncrementalMove(true);
			} else if ($event.key === 'ArrowLeft' || $event.key === 'ArrowDown') {
				self.onSliderThumbMouseIncrementalMove(false);
			}
		});
		this.eventListeners['onKeyDownListener'] = onKeyDownListener;
	}
	clearListeners() {
		if (this.sliderEl) {
			const onMouseDownListener = this.eventListeners['onMouseDownListener'];
			(this.sliderEl as HTMLElement).removeEventListener('mousedown', onMouseDownListener);
			const onMouseClickListener = this.eventListeners['onMouseClickListener'];
			(this.sliderEl as HTMLElement).removeEventListener('click', onMouseClickListener);
			const onKeyDownListener = this.eventListeners['onKeyDownListener'];
			(this.sliderEl as HTMLElement).removeEventListener('keydown', onKeyDownListener);
			const onMouseMoveListener = this.eventListeners['onMouseMoveListener'];
			document.removeEventListener('mousemove', onMouseMoveListener);
			const onMouseUpListener = this.eventListeners['onMouseUpListener'];
			document.removeEventListener('mouseup', onMouseUpListener);
		}
	}
	@HostListener('window:resize')
	addListeners() {
		this.clearListeners();
		if (this.sliderEl && !this.disabled) {
			this.sliderElProps = this.sliderEl.getBoundingClientRect();
			const onMouseDownListener = this.eventListeners['onMouseDownListener'];
			(this.sliderEl as HTMLElement).addEventListener('mousedown', onMouseDownListener, false);
			const onMouseClickListener = this.eventListeners['onMouseClickListener'];
			(this.sliderEl as HTMLElement).addEventListener('click', onMouseClickListener, false);
			const onKeyDownListener = this.eventListeners['onKeyDownListener'];
			(this.sliderEl as HTMLElement).addEventListener('keydown', onKeyDownListener);
			const onMouseMoveListener = this.eventListeners['onMouseMoveListener'];
			document.addEventListener('mousemove', onMouseMoveListener, false);
			const onMouseUpListener = this.eventListeners['onMouseUpListener'];
			document.addEventListener('mouseup', onMouseUpListener, false);
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
