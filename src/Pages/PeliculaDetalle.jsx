import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"

import { getPeliculasById } from "../services/peliService"

function PeliculaDetalle() {
    const params = useParams()
    const [data, setData] = useState({})
    const [loading, setLoading] = useState(false)

    const styles = {
        profile: {
            alingText: "center",
            width: "80%",
            flexWrap: "wrap",
            display: "flex",
            color: "white",
            marginInline: "auto"
        },
        info: {
            width: "80%",
        },
        description: {
            flexWrap: "wrap"
        },
        ul: {
            listStyle: "none",
        }

    }


    useEffect(() => {
        const carga = async () => {
            await getPeliculasById(params.id)
                .then((info) => {
                    setLoading(true)
                    setData(info)
                    }
                )
        }
        carga()
    }, [params.id])

    if (loading) {
        return (
            <>
                <div className="profile" style={styles.profile}>
                    <img src={data.Poster} alt={params.id}/>
                    <div className="info" style={styles.info}>
                        <h1 style={{marginBottom: "5%"}}>{data.Title}</h1>
                        <ul style={styles.ul}>
                            <li>Tipo: {data.Type}</li>
                            {data.Type === "series" && <li>Temporadas: {data.totalSeasons}</li>}
                            <li>Genero: {data.Genre}</li>
                            <li>Lenguaje: {data.Language}</li>
                            <li>Reparto: {data.Actors}</li>
                        </ul>
                        <div className="description" style={styles.description}>{data.Plot}</div>
                    </div>
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