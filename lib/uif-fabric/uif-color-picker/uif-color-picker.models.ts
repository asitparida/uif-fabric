import { IColor } from './uif-color.helpers';

export class UIfColorPickerModel implements IColor {
	hex: string;
	str: string;
	r: number;
	g: number;
	b: number;
	a?: number;
	h: number;
	s: number;
	v: number;
}
