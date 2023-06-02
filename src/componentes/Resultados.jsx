import Pelicula from "./Pelicula"

function Resultados({ data }) {

    if (data) {
        return (
            <>
                {data.map((info) => {
                    return (
                        <Pelicula
                            key={info.imdbID}
                            info={info}
                        />
                    )
                })}
            </>
        )
    }
}

export default Resultados