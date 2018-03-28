
content = document.getElementById('content');
popular = document.getElementById('popular');

const getConnection = () =>{
    const ts = Date.now(),
    URL = 'https://api.themoviedb.org/3/movie/now_playing?api_key=29194f65765f7abcec326d9f2cf7d729&language=pt-BR&page=1';
    fetch(URL)
        .then(response => response.json())
        .then(response =>{
            // console.log(response.results)
            
           content.innerHTML=''
           for(var i =0; i < 3; i++){
               content.innerHTML += `
               <div class="card">
                    <div class="container">
                    <h4><a class="tit">${response.results[i].title}</a></h4>
                    </div>
                    <a href="detalhes.html?id=${response.results[i].id}"><img src="https://image.tmdb.org/t/p/w185_and_h278_bestv2/${response.results[i].poster_path}" alt="" style="width: 60%"/>
                    </a> <br><br>
                </div>     
               `
           }
        });
};
getConnection();


const getPopular = () =>{
    const ts = Date.now(),
    URL = 'https://api.themoviedb.org/3/movie/popular?api_key=29194f65765f7abcec326d9f2cf7d729&language=pt-BR&page=1';
    fetch(URL)
        .then(response => response.json())
        .then(response =>{

            // console.log(response.results)
           for(var i =0; i < 5; i++){
            popular.innerHTML += `
        <tr>
            <td><a href="detalhes.html?id=${response.results[i].id}"> ${response.results[i].title}</a></td>
            <td><a href="detalhes.html?id=${response.results[i].id}"> ${response.results[i].genre_ids} </a></td>
        </tr>`
           }
        });
};
getPopular();

