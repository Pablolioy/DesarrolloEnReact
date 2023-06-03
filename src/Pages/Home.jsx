//Hooks
import { useState } from "react"


//React Bootstrap
import { Row } from "react-bootstrap"

//Componentes
import Buscador from "../componentes/Buscador"
import Resultados from "../componentes/Resultados"

//JS
import { getPeliculas } from '../services/peliService'

function Home() {
    const [query, setQuery] = useState("")
    const [data, setData] = useState("")

    const handleInputChange = ({ target }) => {
        setQuery(target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const request = async () => {
            try {
                const response = await getPeliculas(query)
                setData(response.Search)
            } catch (e) {
                console.log(e)
            }
        }
        request()
    }


    return (
        <>
            <Buscador
                handleInputChange={handleInputChange}
                handleSubmit={handleSubmit}
                texto={query}
            />
            <Row>
                <Resultados
                    data={data}
                />
            </Row>

        </>
    )
}

export default Home