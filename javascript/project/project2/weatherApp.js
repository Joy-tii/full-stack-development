const url = 'https://open-weather13.p.rapidapi.com/city/landon/EN';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '258a829184msh00066fed5312a39p1fb87fjsn87e3a3a120a9',
		'x-rapidapi-host': 'open-weather13.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}