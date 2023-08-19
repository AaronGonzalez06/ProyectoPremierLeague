let datosEquipos = [];
if(localStorage.getItem("resultados")){
    datosEquipos = JSON.parse(localStorage.getItem("resultados"));
}else{
    localStorage.removeItem('temporada');
    localStorage.setItem('temporada',"Temporada 2023");
    resultados("2023");
}

console.log("🚀 ~ file: main.js:10 ~ datosEquipos:", datosEquipos);
let main = document.getElementById("resultado");
let temporada = document.getElementById("temporada");
temporada.innerHTML = localStorage.getItem("temporada");
datosEquipos.forEach(function(dato) {
    let prueba = `<p class='equipo'>
    <span class='intro 
    ${dato.stats.rank == 18 || dato.stats.rank == 19 || dato.stats.rank == 20 ? "descenso" : ""}
    ${dato.stats.rank == 1 ? "ganador" : ""}
    ${dato.stats.rank == 2 || dato.stats.rank == 3 || dato.stats.rank == 4 ? "azul" : ""}
    ${dato.stats.rank == 5 || dato.stats.rank == 6 ? "naranja" : ""}
    ${dato.stats.rank == 7 ? "naranja" : ""}'>#${dato.stats.rank} <img class='logo' src='${dato.team.logo}' /> ${dato.team.name}</span>
    <span class='nombres'>
    <span class='celda'>${dato.stats.points}</span> 
    <span class='celda'> ${dato.stats.gamesPlayed}</span> 
    <span class='celda'> ${dato.stats.wins}</span>
    <span class='celda'> ${dato.stats.losses}  </span>
    <span class='celda'> ${dato.stats.ties}</span>
    <span class='celda'> ${dato.stats.goalDifference} </span>
    <span class='celda'> ${dato.stats.goalsAgainst} </span>
    <span class='celda'> ${dato.stats.goalsFor}</span>
    </span>
    </p>`;
    main.innerHTML += prueba;
})

const season = document.getElementById('search');

season.addEventListener('input', async function() {
    let year = season.value.length;
    if (year == 4) {
        if (!isNaN(parseInt(season.value))) {
            if(season.value>= 2005 && season.value <=2023){
                resultado.innerHTML = '';
                try {
                    await resultados(season.value);
                    let temporada = document.getElementById("temporada");
                    temporada.innerHTML = "Temporada " + season.value;
                    localStorage.removeItem('temporada');
                    localStorage.setItem('temporada',"Temporada " + season.value);
                    let main = document.getElementById("resultado");
                    let datosEquiposSearch = JSON.parse(localStorage.getItem("resultados"));
                    console.log("datosEquiposSearch:", datosEquiposSearch);
                    main.innerHTML += `<p class="equipo">
                    <span></span>
                    <span class="nombres">
                        <span class="celdaNombre">Points</span>
                        <span class="celdaNombre">Games played</span>
                        <span class="celdaNombre">Wins</span>
                        <span class="celdaNombre">Losses</span>
                        <span class="celdaNombre">Ties</span>
                        <span class="celdaNombre">Goal difference</span>
                        <span class="celdaNombre">Goals against</span>
                        <span class="celdaNombre">Goals for</span>
                    </span>
                    </p>
                    `;
                    datosEquiposSearch.forEach(function(dato) {
                        let prueba = `<p class='equipo'>
                        <span class='intro 
                        ${dato.stats.rank == 18 || dato.stats.rank == 19 || dato.stats.rank == 20 ? "descenso" : ""}
                        ${dato.stats.rank == 1 ? "ganador" : ""}
                        ${dato.stats.rank == 2 || dato.stats.rank == 3 || dato.stats.rank == 4 ? "azul" : ""}
                        ${dato.stats.rank == 5 || dato.stats.rank == 6 ? "naranja" : ""}
                        ${dato.stats.rank == 7 ? "naranja" : ""}'>#${dato.stats.rank} <img class='logo' src='${dato.team.logo}' /> ${dato.team.name}</span>
                        <span class='nombres'>
                        <span class='celda'>${dato.stats.points}</span> 
                        <span class='celda'> ${dato.stats.gamesPlayed}</span> 
                        <span class='celda'> ${dato.stats.wins}</span>
                        <span class='celda'> ${dato.stats.losses}  </span>
                        <span class='celda'> ${dato.stats.ties}</span>
                        <span class='celda'> ${dato.stats.goalDifference} </span>
                        <span class='celda'> ${dato.stats.goalsAgainst} </span>
                        <span class='celda'> ${dato.stats.goalsFor}</span>
                        </span>
                        </p>`;
                        main.innerHTML += prueba;
                    });
                } catch (error) {
                    console.error(error);
                }
            }else{
                alert("fecha no valida");
            }
        }else{
            alert("Formato no valido");
        }        
    }
});