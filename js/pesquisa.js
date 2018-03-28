
pesquisa = document.getElementById('s');

var url   = window.location.search.replace("?pes=", "");
var items = url.split("=");

var array = {
  'id' : items[0],
}

var id = array["id"];
console.log(id);


const getPesquisa = () =>{
    if(id === ""){
        document.getElementById("teste").style.display ="none";
        document.getElementById("esconder").style.display ="block";
        // console.log(' vazia')
    }else{
        // console.log('nao vazia')
        
  
    const ts = Date.now(),
    URL = `
    https://api.themoviedb.org/3/search/movie?api_key=29194f65765f7abcec326d9f2cf7d729&language=pt-BR&query=${id}&page=1&include_adult=false`;
    fetch(URL)
        .then(response => response.json())
        .then(response =>{
            // console.log(response.results)
            document.getElementById("teste").style.display ="block";
            document.getElementById("esconder").style.display ="none";
            pesquisa.innerHTML=''
           for(var i =0; i < 3; i++){
            pesquisa.innerHTML += `
            <tr>
                <td><a href="detalhes.html?id=${response.results[i].id}"> ${response.results[i].title}</a></td>
                <td><a href="detalhes.html?id=${response.results[i].id}"> ${response.results[i].genre_ids} </a></td>
            </tr>`
           }
        });
    }
};
getPesquisa();
