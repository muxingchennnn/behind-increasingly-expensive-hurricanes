import { csvParse, autoType } from "d3";

/** @type {import('./$types').PageLoad} */
export async function load() {
	const [decadeDataResponse, populationDataResponse] = await Promise.all([
		import("$lib/data/decade.csv?raw"),
		import("$lib/data/population.csv?raw")
	]);

	const decadeData = csvParse(decadeDataResponse.default, autoType);
	const populationData = csvParse(populationDataResponse.default, autoType);

	// console.log(decadeData);
	// console.log(populationData);

	return {
		decadeData,
		populationData
	};
}

export const ssr = false;
