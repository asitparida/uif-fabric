import {
	Component, Input, Output, EventEmitter,
	AfterViewInit, ElementRef, HostListener, ViewChild, OnInit
} from '@angular/core';
import { UIfColorPickerModel } from './uif-color-picker.models';
import { GetRandomInt } from '../helpers';
import {
	getColorFromString,
	IColor, updateH, updateSV,
	MAX_COLOR_SATURATION, MAX_COLOR_VALUE, MAX_COLOR_HUE,
	updateA,
	getColorFromRGBA
} from './uif-color.helpers';

@Component({
	selector: 'uif-color-picker',
	templateUrl: './uif-color-picker.component.html',
	styleUrls: ['./uif-color-picker.component.scss']
})
export class UifColorPickerComponent implements AfterViewInit, OnInit {
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
	colorRectProps: ClientRect;
	colorHueSlideProps: ClientRect;
	colorAlphaSlideProps: ClientRect;
	private _colorRectThumbActive = false;
	private _colorHueSlideThumbActive = false;
	private _colorAlphaSlideThumbActive = false;
	constructor(
		private elRef: ElementRef
	) { }
	ngOnInit() {
		this.init();
	}
	init() {
		this.color = getColorFromString(this.hex as string);
	}
	ngAfterViewInit() {
		this.addDOMEventListeners();
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
	addDOMEventListeners() {
		if (this.colorRect) {
			this.colorRectProps = this.colorRect.nativeElement.getBoundingClientRect();
			const onMouseDownListener = ($event: MouseEvent) => {
				this._colorRectThumbActive = true;
			};
			(this.colorRect.nativeElement as HTMLElement).removeEventListener('mousedown', onMouseDownListener);
			(this.colorRect.nativeElement as HTMLElement).addEventListener('mousedown', onMouseDownListener, false);
		}
		if (this.colorHueSlide) {
			this.colorHueSlideProps = this.colorHueSlide.nativeElement.getBoundingClientRect();
			const onMouseDownListener = ($event: MouseEvent) => {
				this._colorHueSlideThumbActive = true;
			};
			(this.colorHueSlide.nativeElement as HTMLElement).removeEventListener('mousedown', onMouseDownListener);
			(this.colorHueSlide.nativeElement as HTMLElement).addEventListener('mousedown', onMouseDownListener, false);
		}
		if (this.colorAlphaSlide) {
			this.colorAlphaSlideProps = this.colorAlphaSlide.nativeElement.getBoundingClientRect();
			const onMouseDownListener = ($event: MouseEvent) => {
				this._colorAlphaSlideThumbActive = true;
			};
			(this.colorAlphaSlide.nativeElement as HTMLElement).removeEventListener('mousedown', onMouseDownListener);
			(this.colorAlphaSlide.nativeElement as HTMLElement).addEventListener('mousedown', onMouseDownListener, false);
		}
		const onMouseMoveListener = ($event: MouseEvent) => {
			this.onColorRectMouseMove($event);
			this.onColorHueSlideMouseMove($event);
			this.onColorAlphaSlideMouseMove($event);
		};
		document.removeEventListener('mousemove', onMouseMoveListener);
		document.addEventListener('mousemove', onMouseMoveListener, false);
		const onMouseUpListener = ($event: MouseEvent) => {
			if (this._colorRectThumbActive) {
				this._colorRectThumbActive = false;
			}
			if (this._colorHueSlideThumbActive) {
				this._colorHueSlideThumbActive = false;
			}
			if (this._colorAlphaSlideThumbActive) {
				this._colorAlphaSlideThumbActive = false;
			}
		};
		document.removeEventListener('mouseup', onMouseUpListener);
		document.addEventListener('mouseup', onMouseUpListener, false);
	}
	onColorRectMouseMove($event: MouseEvent) {
		if (this._colorRectThumbActive) {
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
	}
	assignColorRectThumbPosition(xPercent, yPercent) {
		window.requestAnimationFrame(() => {
			(this.colorRectThumb.nativeElement as HTMLElement).style.left = xPercent + '%';
			(this.colorRectThumb.nativeElement as HTMLElement).style.top = yPercent + '%';
		});
	}
	onColorHueSlideMouseMove($event: MouseEvent) {
		if (this._colorHueSlideThumbActive) {
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
	}
	assignColorHueSliderThumbPosition(xPercent) {
		window.requestAnimationFrame(() => {
			(this.colorHueSlideThumb.nativeElement as HTMLElement).style.left = xPercent + '%';
		});
	}
	onColorAlphaSlideMouseMove($event: MouseEvent) {
		if (this._colorAlphaSlideThumbActive) {
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
