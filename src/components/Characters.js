import React from 'react'

const Characters = (props) => {

    const { characters, setCharacters } = props

    const resetCharacters = () =>{
        setCharacters(null)
    }

    const imgStyles = {
        height: "350px",
        objectFit: "cover"
    }


    return (
        <div className="container-fluid text-center">
            <h1 className="col-4 offset-4 text-bg-info rounded px-2 mt-2">Personajes</h1>
            <button className="btn btn-outline-info m-3" onClick={resetCharacters}>Home</button>
            <div className="row justify-content-center">
                {characters.map((character, index) => (
                    <div className="card col-lg-3 col-md-6 offset-md-3 m-1" key={index} id="card">
                        <img src={character.image} className="card-img-top mt-3 rounded" alt={character.name} style={imgStyles}></img>
                        <div className="card-body">
                            <h3 className="text-info">{character.name}</h3>
                            <h5>{character.status === "Alive" ? (
                                <>
                                    <span  className="text-success">Alive</span>
                                </>
                            ) : (
                                <>
                                    <span  className="text-danger">Dead</span>
                                </>
                            )}</h5>
                            <p className="text-light">
                                <span>Episodios:</span>
                                <span>{character.episode.length}</span>
                            </p>

                            <p className="text-light">
                                <span>Especie:</span>
                                <span>{character.species}</span>
                            </p>
                        </div>
                    </div>





                ))}
            </div>
            <button className="btn btn-outline-info m-3" onClick={resetCharacters}>Home</button>
        </div>
    )
}

export default Characters