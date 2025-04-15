export function parseWaterfallData(data) {
	let last = 0;
	let accu = 0;
	const waterfall = data.map((d, i) => {
		last = accu;
		accu += d.cost;
		return {
			item: d.item,
			nextItem: i < data.length - 1 ? data[i + 1].item : "Total",
			prior: last,
			accu: accu,
			cost: d.cost
		};
	});

	return waterfall;
}
