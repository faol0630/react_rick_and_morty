import React from 'react'
import { useNavigate } from 'react-router-dom'
import { goToCharacters } from '../functions/Functions'
import image_rm from "../img/rm.png"

const Home = () => {

    const navigate = useNavigate()

    return (

        <div className="container">
            <div className="row vh-100 d-lg-flex align-items-center justify-content-center">
                < div id="home" className="col d-lg-flex align-items-center justify-content-center " >

                    <div className="d-flex justify-content-center">
                        <h1 className="text-info text-center mt-3" id="title">Rick & Morty</h1>
                    </div>

                    <div className="d-flex justify-content-center">
                        <img src={image_rm} id="image" alt='home_image' />
                    </div>

                    <div className="d-flex justify-content-center">
                        <button onClick={ () => {goToCharacters(navigate) }} className="btn btn-outline-info m-5">Characters</button>
                    </div>


                </div>
                
            </div>

        </div>
    )
}

export default Home