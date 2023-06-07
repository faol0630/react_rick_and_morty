import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../context/UserContext'

const Card = () => {

    const { characters1 } = useContext(UserContext)

    // -----------------------------------------------------------------

    // ---------------------------------------------------------------------

    let navigate = useNavigate()

    const imgStyles = {
        height: "350px",
        objectFit: "cover"
    }


    return (


        <div className="container">

            <div className="row justify-content-center">

                {

                    characters1.map((character, index) => {

                        return (


                            <div className="card col-xl-3 col-lg-5 col-md-5 col-sm-7 col-10 m-2" key={index} id="card">
                                <div type='hidden'>{character.id}</div>
                                <img src={character.image} className="card-img-top mt-3 rounded" alt={character.name} style={imgStyles}></img>
                                <div className="card-body">
                                    <h3 className="text-info">{character.name}</h3>

                                    <button className="btn btn-outline-info" onClick={() => navigate(`/character/${character.id}`)} >Details</button>
                                </div>
                            </div>
                        )

                    })

                }

                {/* }else{

                    // "No characters found"
                    <div className="text-bg-dark text-info">
                        <h3>No Characters Found</h3>
                    </div>
                } */}

            </div>


        </div>



    )
}

export default Card