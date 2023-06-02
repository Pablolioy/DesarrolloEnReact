export function getPeliculas(query){
    return fetch(`https://www.omdbapi.com/?&apikey=21d7da64&s=${query}`).then(res=>res.json())
}

export function getPeliculasById(id) {
    return fetch(`https://www.omdbapi.com/?&apikey=21d7da64&i=${id}`).then(res=>res.json())
}

