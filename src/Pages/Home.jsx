//Hooks
import { useState } from "react"

//Componentes
import Buscador from "../componentes/Buscador"

//JS
import getPeliculas from '../Service/peliService'

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
                setData(response.results)
                console.log(data)
            } catch (e) {
                console.log(e)
            }
        }
        request()
    }


    return (
        <Buscador
            handleInputChange={handleInputChange}
            handleSubmit={handleSubmit}
            texto={query}
        />
    )
}

export default Home