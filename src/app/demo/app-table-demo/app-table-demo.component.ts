import { Component } from '@angular/core';

@Component({
	selector: 'app-table-demo',
	templateUrl: './app-table-demo.component.html'
})
export class TableDemoComponent {
	selectable = true;
	allSelected = false;
	rows = [
		{
			'album': 'The White Stripes',
			'year': 1999,
			'US_peak_chart_post': '-',
			selected: false
		},
		{
			'album': 'De Stijl',
			'year': 2000,
			'US_peak_chart_post': '-',
			selected: false
		},
		{
			'album': 'White Blood Cells',
			'year': 2001,
			'US_peak_chart_post': 61,
			selected: false
		},
		{
			'album': 'Elephant',
			'year': 2003,
			'US_peak_chart_post': 6,
			selected: false
		},
		{
			'album': 'Get Behind Me Satan',
			'year': 2005,
			'US_peak_chart_post': 3,
			selected: false
		},
		{
			'album': 'Icky Thump',
			'year': 2007,
			'US_peak_chart_post': 2,
			selected: false
		},
		{
			'album': 'Under Great White Northern Lights',
			'year': 2010,
			'US_peak_chart_post': 11,
			selected: false
		},
		{
			'album': 'Live in Mississippi',
			'year': 2011,
			'US_peak_chart_post': '-',
			selected: false
		},
		{
			'album': 'Live at the Gold Dollar',
			'year': 2012,
			'US_peak_chart_post': '-',
			selected: false
		},
		{
			'album': 'Nine Miles from the White City',
			'year': 2013,
			'US_peak_chart_post': '-',
			selected: false
		}
	];
	booleanHints = [
		{ key: true, text: 'Yes'},
		{ key: false, text: 'No'}
	];
	getRowJson() {
		return this.rows.map((row: any) => {
			return ` \n album: ${row.album}, year: ${row.year}, year: ${row.year}, selected: ${row.selected}`;
		});
	}
	getBoolean(val): boolean {
		if (typeof val === 'boolean') {
			return val;
		} else {
			return val === 'false' ? false : true;
		}
	}
}
