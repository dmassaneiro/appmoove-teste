const key = '29194f65765f7abcec326d9f2cf7d729',
idioma = 'pt-BR',
descricao = document.getElementById('descricao');

    var url   = window.location.search.replace("?id=", "");
    var items = url.split("=");
    
    var array = {
      'id' : items[0],
    }

    var id = array["id"];
    // console.log(id);

    const getDescricao = () =>{
        const ts = Date.now(),
        URL = `https://api.themoviedb.org/3/movie/${id}?api_key=${key}&language=${idioma}`;
        fetch(URL)
            .then(response => response.json())
            .then(response =>{
                var data = response.release_date;
                var dataNova = data.split('-');


                descricao.innerHTML += `
                    <div>
                        <img src="https://image.tmdb.org/t/p/w185_and_h278_bestv2/${response.poster_path}" style="width: 15%" align="left">
                    </div>
                    <div>
                    <h1 id="title">${response.title}</h1>
                    <h2 id="title">Sinopse</h2>
                    <p id="desc">${response.overview}</p>
                    <ul id="list">
                        <li><b>Média de Votos: </b>${response.vote_average} %</li>
                        <li><b>Lançamento: </b>${dataNova[2]+'/'+dataNova[1]+'/'+dataNova[0]}</li>
                    </ul>
                    `
                    descricao.innerHTML += ` <ul id="list">
                    <li><b>Gênero: </b><a id="gen"></a>`
                    for (i = 0; i < response.genres.length; i++) {
                        console.log(response.genres[i].name);
                        document.getElementById("gen").innerHTML =response.genres[i].name;
                    }
                        `</li>                    
                    </ul>
                    </div>`
                        
                    
            }
     )};

    getDescricao();