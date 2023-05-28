export default function getPeliculas(query){
    return fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${query}`).then(res=>res.json())
}