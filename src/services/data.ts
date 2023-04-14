import {interStarWars} from "../types/data";

export default async function traer_api() {
	try {
			const starwar = await fetch('https://swapi.dev/api/people/').then((res) => {
				return res.json();
			});
			return starwar.results;
	} catch (error) {
		console.log(error);
	}
}
