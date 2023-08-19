const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'b068d7c049mshc7fb1fa399c3e62p1d7765jsncb45a01c456c',
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
        }else{
			localStorage.removeItem("resultados");
            localStorage.setItem("resultados",JSON.stringify(jsonData));
		}
	} catch (error) {
		throw error;
	}
}