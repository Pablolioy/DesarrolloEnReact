import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"

import { getPeliculasById } from "../services/peliService"

function PeliculaDetalle() {
    const params = useParams()
    const [data, setData] = useState({})
    const [loading, setLoading] = useState(false)


    useEffect(() => {
        const carga = async () => {
            await getPeliculasById(params.id)
                .then((info) => {
                    setLoading(true)
                    setData(info)
                    console.log(info)
                }
                )
        }
        carga()
    }, [params.id])

    if (loading) {
        return (
            <>
                <h1>
                    {data.Title}
                </h1>
                <div>
                    <img src={data.Poster} />
                    <ul>
                        <li>Tipo: {data.Type}</li>
                        {data.Type === "series" && <li>Temporadas: {data.totalSeasons}</li>}
                        <li>Genero: {data.Genre}</li>
                        <li>Lenguaje: {data.Language}</li>
                        <li>Reparto: {data.Actors}</li>
                    </ul>
                </div>
                    <div>
                        {data.Plot}
                    </div>
            </>
        )
    } else {
        return (
            <>Cargando..</>
        )
    }

}

export default PeliculaDetalle