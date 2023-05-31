import React from 'react'
import { useNavigate } from 'react-router-dom'
import image_rm from "../img/rm.png"

const Home = () => {

    let navigate = useNavigate()

    const goToCharacters = () =>{
        navigate("/characters")
    }

    return (
        <div>
            <header className="d-flex flex-lg-column ">
                < div id="app" className="d-flex align-items-center justify-content-center col-lg-6 offset-lg-3 col-md-10 offset-md-1 " >
                    <h1 className="text-info" id="title">Rick & Morty</h1>
                    <img src={image_rm} id="image" alt='home_image' />
                    <button onClick={goToCharacters} className="btn btn-outline-info m-5">Buscar personajes</button>
                </div>
            </header>
        </div>
    )
}

export default Home