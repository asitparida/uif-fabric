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
