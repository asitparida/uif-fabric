import {
	Component, Input, Output, EventEmitter,
	AfterViewInit, ElementRef, HostListener, ViewChild, OnInit, OnDestroy
} from '@angular/core';
import { UIfColorPickerModel } from './uif-color-picker.models';
import { GetRandomInt, GetScrollParent, EventSubscribers } from '../helpers';
import {
	getColorFromString,
	IColor, updateH, updateSV,
	MAX_COLOR_SATURATION, MAX_COLOR_VALUE, MAX_COLOR_HUE,
	updateA,
	getColorFromRGBA
} from './uif-color.helpers';
import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/operator/debounceTime';

@Component({
	selector: 'uif-color-picker',
	templateUrl: './uif-color-picker.component.html',
	styleUrls: ['./uif-color-picker.component.scss']
})
export class UifColorPickerComponent implements AfterViewInit, OnInit, OnDestroy {
	COLOR_RECT = '#FFFFFF';
	color: UIfColorPickerModel = new UIfColorPickerModel();
	@Input() hex = '#FFFFFF';
	@Output() hexChange = new EventEmitter<String>();
	colorRectId = 'COLOR_RECT' + GetRandomInt();
	@ViewChild('colorRect') colorRect;
	@ViewChild('colorRectThumb') colorRectThumb;
	@ViewChild('colorHueSlide') colorHueSlide;
	@ViewChild('colorHueSlideThumb') colorHueSlideThumb;
	@ViewChild('colorAlphaSlide') colorAlphaSlide;
	@ViewChild('colorAlphaSlideThumb') colorAlphaSlideThumb;
	@ViewChild('colorAlphaSlideOverlay') colorAlphaSlideOverlay;
	private colorRectProps: ClientRect;
	private colorHueSlideProps: ClientRect;
	private colorAlphaSlideProps: ClientRect;
	private colorRectThumbActive = false;
	private colorHueSlideThumbActive = false;
	private colorAlphaSlideThumbActive = false;
	private eventSubscribers: EventSubscribers = new EventSubscribers();
	constructor(
		private elRef: ElementRef
	) { }
	ngOnInit() {
		this.init();
	}
	init() {
		this.color = getColorFromString(this.hex as string);
	}
	ngOnDestroy() {
		this.eventSubscribers.clearSubscribers();
	}
	ngAfterViewInit() {
		this.createListeners();
		this.initFns();
	}
	initFns() {
		this.initiazlizeColorRect();
		this.initializeColorRectThumb();
		this.initializeHueSlider();
		this.initializeAlphaSlider();
		this.updateColorRectThumbColor();
		this.updateAlphaSlideOverlay();
	}
	initiazlizeColorRect() {
		const color = Object.assign({}, this.color);
		const updateColorForColoRect = updateSV(this.color, 100, 100);
		setTimeout(() => {
			this.COLOR_RECT = updateColorForColoRect.str;
		});
	}
	initializeColorRectThumb() {
		const xPercentForColorRectThumb = (this.color.s / MAX_COLOR_SATURATION) * 100; // saturationPercent
		const yPercentForColorRectThumb = ((MAX_COLOR_VALUE - this.color.v) / MAX_COLOR_VALUE) * 100; // valuePercent
		this.assignColorRectThumbPosition(xPercentForColorRectThumb, yPercentForColorRectThumb);
	}
	initializeHueSlider() {
		const xPercentForHueSliderThumb = (this.color.h / MAX_COLOR_HUE) * 100; // HuePercent
		this.assignColorHueSliderThumbPosition(xPercentForHueSliderThumb);
	}
	initializeAlphaSlider() {
		const xPercentForAlphaSliderThumb = (this.color.a / 100) * 100; // HuePercent
		this.assignColorAlphaSliderThumbPosition(xPercentForAlphaSliderThumb);
	}
	createListeners() {
		this.eventSubscribers.clearSubscribers();
		if (this.colorRect) {
			this.colorRectProps = this.colorRect.nativeElement.getBoundingClientRect();
			this.eventSubscribers.pushSubscriber({
				name: 'onMouseDownListenerForColorRect',
				subscripiton: Observable.fromEvent(this.colorRect.nativeElement, 'mousedown')
					.subscribe(($event: MouseEvent) => {
						this.colorRectThumbActive = true;
					}),
				meta: 'colorRect'
			});
			this.eventSubscribers.pushSubscriber({
				name: 'onClickListenerForColorRect',
				subscripiton: Observable.fromEvent(this.colorRect.nativeElement, 'click')
					.subscribe(($event: MouseEvent) => {
						this.onColorRectMouseMove($event, true);
					}),
				meta: 'colorRect'
			});
		}
		if (this.colorHueSlide) {
			this.colorHueSlideProps = this.colorHueSlide.nativeElement.getBoundingClientRect();
			this.eventSubscribers.pushSubscriber({
				name: 'onMouseDownListenerForColorHueSlide',
				subscripiton: Observable.fromEvent(this.colorHueSlide.nativeElement, 'mousedown')
					.subscribe(($event: MouseEvent) => {
						this.colorHueSlideThumbActive = true;
					}),
				meta: 'colorHueSlide'
			});
			this.eventSubscribers.pushSubscriber({
				name: 'onClickListenerForColorRect',
				subscripiton: Observable.fromEvent(this.colorHueSlide.nativeElement, 'click')
					.subscribe(($event: MouseEvent) => {
						this.onColorHueSlideMouseMove($event, true);
					}),
				meta: 'colorHueSlide'
			});
		}
		if (this.colorAlphaSlide) {
			this.colorAlphaSlideProps = this.colorAlphaSlide.nativeElement.getBoundingClientRect();
			this.eventSubscribers.pushSubscriber({
				name: 'onMouseDownListenerForColorAlphaSlider',
				subscripiton: Observable.fromEvent(this.colorAlphaSlide.nativeElement, 'mousedown')
					.subscribe(($event: MouseEvent) => {
						this.colorAlphaSlideThumbActive = true;
					}),
				meta: 'colorAlphaSlide'
			});
			this.eventSubscribers.pushSubscriber({
				name: 'onClickListenerForColorAlphaSlider',
				subscripiton: Observable.fromEvent(this.colorAlphaSlide.nativeElement, 'click')
					.subscribe(($event: MouseEvent) => {
						this.onColorAlphaSlideMouseMove($event, true);
					}),
				meta: 'colorAlphaSlide'
			});
		}
		this.eventSubscribers.pushSubscriber({
			name: 'onMouseMoveListener',
			subscripiton: Observable.fromEvent(document, 'mousemove')
				.subscribe(($event: MouseEvent) => {
					this.onColorRectMouseMove($event);
				this.onColorHueSlideMouseMove($event);
				this.onColorAlphaSlideMouseMove($event);
				}),
			meta: 'document'
		});
		this.eventSubscribers.pushSubscriber({
			name: 'onMouseUpListener',
			subscripiton: Observable.fromEvent(document, 'mouseup')
				.subscribe(($event: MouseEvent) => {
					setTimeout(() => {
						if (this.colorRectThumbActive) {
							this.colorRectThumbActive = false;
						}
						if (this.colorHueSlideThumbActive) {
							this.colorHueSlideThumbActive = false;
						}
						if (this.colorAlphaSlideThumbActive) {
							this.colorAlphaSlideThumbActive = false;
						}
					});
				}),
			meta: 'document'
		});
		this.eventSubscribers.pushSubscriber({
			name: 'onScrollListener',
			subscripiton: Observable.fromEvent(document, 'scroll')
				.debounceTime(100)
				.subscribe(($event: MouseEvent) => {
					this.collectProps();
				}),
			meta: 'document'
		});
		this.eventSubscribers.pushSubscriber({
			name: 'onResizeListener',
			subscripiton: Observable.fromEvent(window, 'resize')
				.debounceTime(100)
				.subscribe(($event: MouseEvent) => {
					this.collectProps();
				}),
			meta: 'window'
		});
		const scrollElm = GetScrollParent(this.elRef.nativeElement);
		if (scrollElm) {
			this.eventSubscribers.pushSubscriber({
				name: 'onScrollListener',
				subscripiton: Observable.fromEvent(scrollElm, 'scroll')
					.debounceTime(100)
					.subscribe(($event: MouseEvent) => {
						this.collectProps();
					}),
				meta: 'scrollElm'
			});
			this.eventSubscribers.pushSubscriber({
				name: 'onResizeListener',
				subscripiton: Observable.fromEvent(scrollElm, 'resize')
					.debounceTime(100)
					.subscribe(($event: MouseEvent) => {
						this.collectProps();
					}),
				meta: 'scrollElm'
			});
		}
	}
	collectProps() {
		setTimeout(() => {
			if (this.colorRect) {
				this.colorRectProps = this.colorRect.nativeElement.getBoundingClientRect();
			}
			if (this.colorHueSlide) {
				this.colorHueSlideProps = this.colorHueSlide.nativeElement.getBoundingClientRect();
			}
			if (this.colorAlphaSlide) {
				this.colorAlphaSlideProps = this.colorAlphaSlide.nativeElement.getBoundingClientRect();
			}
		});
	}
	onColorRectMouseMove($event: MouseEvent, forceFalse = false) {
		if (this.colorRectThumbActive) {
			if (this.colorRectProps) {
				let x = $event.clientX - this.colorRectProps.left;
				x = x;
				x = x < 0 ? 0 : x;
				x = x > this.colorRectProps.width ? this.colorRectProps.width : x;
				let y = $event.clientY - this.colorRectProps.top;
				y = y;
				y = y < 0 ? 0 : y;
				y = y > this.colorRectProps.height ? this.colorRectProps.height : y;
				const xPercent = (x / this.colorRectProps.width) * 100; // saturationPercent
				const yPercent = (y / this.colorRectProps.height) * 100; // valuePercent
				this.assignColorRectThumbPosition(Math.round(xPercent), Math.round(yPercent));
				const sValue = Math.round((xPercent * MAX_COLOR_SATURATION) / 100);
				const vValue = Math.round(((100 - yPercent) * MAX_COLOR_VALUE) / 100);
				this.onColorSVUpdate(sValue, vValue);
			}
		}
		if (forceFalse) {
			this.colorRectThumbActive = false;
		}
	}
	assignColorRectThumbPosition(xPercent, yPercent) {
		window.requestAnimationFrame(() => {
			(this.colorRectThumb.nativeElement as HTMLElement).style.left = xPercent + '%';
			(this.colorRectThumb.nativeElement as HTMLElement).style.top = yPercent + '%';
		});
	}
	onColorHueSlideMouseMove($event: MouseEvent, forceFalse = false) {
		if (this.colorHueSlideThumbActive) {
			if (this.colorHueSlideProps) {
				let x = $event.clientX - this.colorHueSlideProps.left;
				x = x;
				x = x < 0 ? 0 : x;
				x = x > this.colorHueSlideProps.width ? this.colorHueSlideProps.width : x;
				const xPercent = (x / this.colorHueSlideProps.width) * 100; // saturationPercent
				this.assignColorHueSliderThumbPosition(Math.round(xPercent));
				const hueValue = Math.round((xPercent * MAX_COLOR_HUE) / 100);
				this.onColorHueUpadate(hueValue);
			}
		}
		if (forceFalse) {
			this.colorHueSlideThumbActive = false;
		}
	}
	assignColorHueSliderThumbPosition(xPercent) {
		window.requestAnimationFrame(() => {
			(this.colorHueSlideThumb.nativeElement as HTMLElement).style.left = xPercent + '%';
		});
	}
	onColorAlphaSlideMouseMove($event: MouseEvent, forceFalse = false) {
		if (this.colorAlphaSlideThumbActive) {
			if (this.colorAlphaSlideProps) {
				let x = $event.clientX - this.colorAlphaSlideProps.left;
				x = x;
				x = x < 0 ? 0 : x;
				x = x > this.colorAlphaSlideProps.width ? this.colorAlphaSlideProps.width : x;
				const xPercent = (x / this.colorAlphaSlideProps.width) * 100; // saturationPercent
				this.assignColorAlphaSliderThumbPosition(Math.round(xPercent));
				const alphaValue = Math.round((xPercent * 100) / 100);
				this.onColorAlphaUpdate(alphaValue);
			}
		}
		if (forceFalse) {
			this.colorAlphaSlideThumbActive = false;
		}
	}
	assignColorAlphaSliderThumbPosition(xPercent) {
		window.requestAnimationFrame(() => {
			(this.colorAlphaSlideThumb.nativeElement as HTMLElement).style.left = xPercent + '%';
		});
	}
	updateColorRectThumbColor() {
		if (this.colorRectThumb) {
			(this.colorRectThumb.nativeElement as HTMLElement).style.backgroundColor = this.color.str;
		}
	}
	updateAlphaSlideOverlay() {
		if (this.colorAlphaSlideOverlay) {
			(this.colorAlphaSlideOverlay.nativeElement as HTMLElement).style.background =
				`linear-gradient(to right, transparent 0px, rgba(${this.color.r}, ${this.color.g}, ${this.color.b}, ${this.color.a / 100}) 100%)`;
		}
	}
	onColorSVUpdate(s: number, v: number) {
		this.color = updateSV(this.color, s, v);
		this.updateColorRectThumbColor();
		this.updateAlphaSlideOverlay();
		this.hex = this.color.str;
		this.hexChange.emit(this.hex);
	}
	onColorHueUpadate(hue: number) {
		this.color = updateH(this.color, hue);
		this.initiazlizeColorRect();
		this.initializeColorRectThumb();
		this.updateColorRectThumbColor();
		this.updateAlphaSlideOverlay();
		this.hex = this.color.str;
		this.hexChange.emit(this.hex);
	}
	onColorAlphaUpdate(alpha: number) {
		this.color = updateA(this.color, alpha);
		this.hex = this.color.str;
		this.hexChange.emit(this.hex);
		this.initiazlizeColorRect();
		this.initializeColorRectThumb();
		this.updateColorRectThumbColor();
		this.updateAlphaSlideOverlay();
	}
	onHexInputChange() {
		const hex = this.color.hex;
		const color = getColorFromString(`#${hex}`);
		if (this.isValidColor(color)) {
			this.color = color;
			this.initFns();
			this.hex = this.color.str;
			this.hexChange.emit(this.hex);
		}
	}
	onRGBAInputChange() {
		const color = getColorFromRGBA({ r: this.color.r, g: this.color.g, b: this.color.b, a: this.color.a });
		if (this.isValidColor(color)) {
			this.color = color;
			this.initFns();
			this.hex = this.color.str;
			this.hexChange.emit(this.hex);
		}
	}
	isValidColor(color: UIfColorPickerModel) {
		return typeof color !== 'undefined'
			&& typeof color.r !== 'undefined' && color.r >= 0 && color.r <= 255
			&& typeof color.g !== 'undefined' && color.g >= 0 && color.g <= 255
			&& typeof color.b !== 'undefined' && color.b >= 0 && color.b <= 255
			&& typeof color.a !== 'undefined' && color.a >= 0 && color.a <= 100
			&& typeof color.h !== 'undefined'
			&& typeof color.s !== 'undefined'
			&& typeof color.v !== 'undefined'
			&& typeof color.hex !== 'undefined' && color.hex !== 'NaNNaNNaN'
			&& typeof color.str !== 'undefined';
	}
}
