import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../context/UserContext'
import { reqApi } from '../functions/Functions'


const Characters = () => {


    //esta const contiene a page y setPage
    const pageNumber = useContext(UserContext)

    let navigate = useNavigate()

    const backToHome = () => {
        navigate("/")
    }

    const imgStyles = {
        height: "350px",
        objectFit: "cover"
    }

    const [characters1, setCharacters] = useState([])

    
    const nextPage = () => {
        if (pageNumber.page <= 41) {
    
            pageNumber.setPage(pageNumber.page + 1)
            reqApi(pageNumber.page, setCharacters)
        }
    }
    
    const previousPage = () => {
        if (pageNumber.page >= 2) {
    
            pageNumber.setPage(pageNumber.page - 1)
            reqApi(pageNumber.page, setCharacters)
        }
    }


    useEffect(() => {
        reqApi(pageNumber.page, setCharacters)
    }, [pageNumber.page])  //sin pasar page, genera errores en los cambios de pagina

    

    return (
        <div className="container-fluid text-center" >

            <div className="row justify-content-center">

                <div className="col-10 col-sm-8 col-md-6 col-lg-4 ">

                    <h1 className=" text-bg-info rounded px-2 mt-2 mx-auto">Characters</h1>
                    <button className="btn btn-outline-info m-3" onClick={backToHome}>Home</button>

                </div>

            </div>

            <div className="row justify-content-center">

                {

                    characters1.map((character, index) => (

                        <div className="card col-xl-3 col-lg-5 col-md-5 col-sm-7 col-10 m-2" key={index} id="card">
                            <div type='hidden'>{character.id}</div>
                            <img src={character.image} className="card-img-top mt-3 rounded" alt={character.name} style={imgStyles}></img>
                            <div className="card-body">
                                <h3 className="text-info">{character.name}</h3>

                                <button className="btn btn-outline-info" onClick={() => navigate(`/character/${character.id}`)} >Details</button>
                            </div>
                        </div>

                    ))

                }

            </div>


            <div className="row ">
                <div className="col">
                    <button className="btn btn-outline-warning col-md-3 col-sm-6 col-8 m-1 my-2" onClick={previousPage} >Previous page</button>
                    <button className="btn btn-outline-info col-md-3 col-sm-6 col-8 m-1 my-2" onClick={backToHome}>Home</button>
                    <button className="btn btn-outline-danger col-md-3 col-sm-6 col-8 m-1 my-2" onClick={nextPage}>Next page</button>
                </div>
            </div>


            <div className="row">
                <p className="text-bg-danger col-4 offset-4 rounded p-2">Page: {pageNumber.page}</p>

            </div>
        </div>
    )
}

export default Characters