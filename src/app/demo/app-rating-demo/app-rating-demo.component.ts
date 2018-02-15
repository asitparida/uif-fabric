import { Component } from '@angular/core';
@Component({
	selector: 'app-rating-demo',
	templateUrl: './app-rating-demo.component.html'
})
export class RatingDemoComponent {
	disabled = false;
	booleanHints = [
		{ key: true, text: 'Yes'},
		{ key: false, text: 'No'}
	];
	color = '#0078d7';
	colorHints = [
		{ key: '#000000', text: 'Black' },
		{ key: '#333333', text: 'Neutral Primary' },
		{ key: '#005a9e', text: 'Theme Dark' },
		{ key: '#0078d7', text: 'Theme Primary' },
		{ key: '#ffb900', text: 'Yellow' },
		{ key: '#ff8c00', text: 'Orange' },
		{ key: '#e81123', text: 'Red' },
		{ key: '#5c2d91', text: 'Purple' },
		{ key: '#0078d7', text: 'Blue' },
		{ key: '#b4009e', text: 'Magenta' },
		{ key: '#008272', text: 'Teal' },
		{ key: '#107c10', text: 'Green' },
	];
	maxRating = 5;
	maxRatingHints = [
		{ key: 5, text: 5},
		{ key: 6, text: 6},
		{ key: 7, text: 7},
		{ key: 8, text: 8},
		{ key: 9, text: 9},
		{ key: 10, text: 10}
	];
	size = 18;
	sizeHints = [
		{ key: 16, text: 16},
		{ key: 18, text: 18},
		{ key: 24, text: 24},
		{ key: 32, text: 32},
		{ key: 48, text: 48},
	];
	icon = 'FavoriteStarFill';
	iconHints = [
		{ key: 'FavoriteStarFill', text: 'FavoriteStarFill'},
		{ key: 'BirthdayCake', text: 'BirthdayCake'},
		{ key: 'BugSolid', text: 'BugSolid'},
		{ key: 'FlameSolid', text: 'FlameSolid'}
	];
	rating = 3;
	get ratingHints() {
		const result = [];
		for (let i = 0; i <= this.maxRating; i++) {
			result.push({ key: i, text: i});
		}
		return result;
	}
	getBoolean(val): boolean {
		if (typeof val === 'boolean') {
			return val;
		} else {
			return val === 'false' ? false : true;
		}
	}
}
