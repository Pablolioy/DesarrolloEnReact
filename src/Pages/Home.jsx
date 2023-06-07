//Hooks
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { useNavigate } from "react-router-dom"

// CSS
import './Home.css'

//React Bootstrap
import { Row } from "react-bootstrap"

//Componentes
import Buscador from "../componentes/Buscador"
import Resultados from "../componentes/Resultados"

//JS
import { getPeliculas } from '../services/peliService'

function Home() {
    const params = useParams()
    const [query, setQuery] = useState("")
    const [data, setData] = useState("")
    const navigate = useNavigate()

    const handleInputChange = ({ target }) => {
        setQuery(target.value)
    }

    //Al hacer submit se redirige la pagina
    const handleSubmit = (e) => {
        e.preventDefault()
        if (query === "") return
        navigate(`/buscar/${query}`)
    }
    
    //Cuando cambia params.id se ejecuta getPeliculas
    useEffect(()=>{
        const request = async () => {
            if (params.id) {
                try {
                    const response = await getPeliculas(params.id)
                    setData(response.Search)
                } catch (e) {
                    console.log(e)
                }
            }else{
                setData("")
            }
        }
        request()
    },[params.id])

    return (
        <>
            <Buscador
                handleInputChange={handleInputChange}
                handleSubmit={handleSubmit}
                texto={query}
            />
            <Row >
                <Resultados
                    data={data}
                />
            </Row>

        </>
    )
}

export default Home