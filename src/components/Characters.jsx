import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { reqApi } from '../functions/Functions'

const Characters = () => {

    let navigate = useNavigate()

    const backToHome = () => {
        navigate("/")
    }

    const imgStyles = {
        height: "350px",
        objectFit: "cover"
    }

    const [characters1, setCharacters] = useState([])

    const [page, setPage] = useState(1)

    useEffect(() => {
        reqApi(page, setCharacters)
    }, [])

    const nextPage = () => {
        if (page <= 41) {

            setPage(page + 1)
            reqApi(page, setCharacters)
        }
    }

    const previousPage = () => {
        if (page >= 2) {

            setPage(page - 1)
            reqApi(page, setCharacters)
        }
    }


    return (
        <div className="container-fluid text-center" >
            <h1 className="col-4 offset-4 text-bg-info rounded px-2 mt-2">Personajes</h1>
            <button className="btn btn-outline-info m-3" onClick={backToHome}>Home</button>
            <div className="row justify-content-center">

                {

                    characters1.map((character, index) => (
                        <div className="card col-lg-3 col-md-6 offset-md-3 m-1" key={index} id="card">
                            <img src={character.image} className="card-img-top mt-3 rounded" alt={character.name} style={imgStyles}></img>
                            <div className="card-body">
                                <h3 className="text-info">{character.name}</h3>

                                <button className="btn btn-outline-info" onClick={() => navigate(`/character/${character.id}`)} >Details</button>
                            </div>
                        </div>


                    ))

                }

            </div>

            <div className="justify-content-center">
                <button className="btn btn-outline-warning m-3" onClick={previousPage} >Previous page</button>
                <button className="btn btn-outline-info m-3" onClick={backToHome}>Home</button>
                <button className="btn btn-outline-danger m-3" onClick={nextPage}>Next page</button>
                <p className="text-bg-danger col-4 offset-4 rounded p-2">Page: {page}</p>
            </div>
        </div>
    )
}

export default Characters