import {interStar} from "../types/data";

export default async function traer_api() {
	try {
			const starwars = await fetch('https://swapi.dev/api/people/').then((res) => {
				return res.json();
			});
			return starwars.results;
	} catch (error) {
		console.log(error);
	}
}
