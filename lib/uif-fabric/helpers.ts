import { Subscription } from 'rxjs/Subscription';

export function GetRandomInt() {
	return Math.floor(Math.random() * 1000000);
}

export function GetScrollParent(node) {
	const isElement = node instanceof HTMLElement;
	const overflowY = isElement && window.getComputedStyle(node).overflowY;
	const isScrollable = overflowY !== 'visible' && overflowY !== 'hidden';

	if (!node) {
		return null;
	} else if (isScrollable && node.scrollHeight >= node.clientHeight) {
		return node;
	}

	return GetScrollParent(node.parentNode) || document.body;
}

export class EventSubscribers {
	private subscribers: Array<{ name: string, subscripiton: Subscription, meta?: any }> = [];
	pushSubscriber(item) {
		const evt = this.subscribers.find(x => x.name === item.name);
		if (evt) {
			if (evt.subscripiton) {
				evt.subscripiton.unsubscribe();
			}
			evt.subscripiton = item.subscripiton;
		} else {
			this.subscribers.push(item);
		}
	}
	clearSubscribers(id: string = null) {
		if (!id) {
			this.subscribers.forEach(item => {
				if (item.subscripiton) {
					item.subscripiton.unsubscribe();
					item.subscripiton = null;
				}
			});
		} else {
			this.subscribers.forEach(item => {
				if (item.name.localeCompare(id) === 0 && item.subscripiton) {
					item.subscripiton.unsubscribe();
					item.subscripiton = null;
				}
			});
		}
	}
	emptySubscribers() {
		this.clearSubscribers();
		this.subscribers = [];
	}
}
