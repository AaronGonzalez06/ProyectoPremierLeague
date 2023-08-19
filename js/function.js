const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '02e2c7be6cmsh1a8ef466d363fe4p1cfa9ajsn7bb9490e5bf0',
		'X-RapidAPI-Host': 'premier-league-standings1.p.rapidapi.com'
	}
};
async function resultados(year) {
	let url = 'https://premier-league-standings1.p.rapidapi.com/?season=';
	url+=year;
	console.log("🚀 ~ file: function.js:11 ~ resultados ~ urlMod:", url)
	try {
		const response = await fetch(url, options);
		const result = await response.text();
		const jsonData = JSON.parse(result);
        if(!localStorage.getItem("resultados")){
            localStorage.setItem("resultados",JSON.stringify(jsonData));
	    location.reload();
        }else{
	    localStorage.removeItem("resultados");
            localStorage.setItem("resultados",JSON.stringify(jsonData));
		}
	} catch (error) {
		throw error;
	}
}
