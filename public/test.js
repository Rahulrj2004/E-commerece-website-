const url = 'https://axesso-walmart-data-service.p.rapidapi.com/wlm/walmart-search-by-keyword?keyword=Lego%20Star%20Wars&page=1&sortBy=best_match';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': 'Sign Up for Key',
		'x-rapidapi-host': 'axesso-walmart-data-service.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}