import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { uniqueCharacter } from '../functions/Functions'

const Character = () => {

  let navigate = useNavigate()

  const useParams1 = useParams()  //para traer los datos de Characters 

  const imgStyles = {
    height: "500px",
    objectFit: "cover"
  }

  const [character, setCharacter] = useState([])

  useEffect(() => {
    uniqueCharacter(useParams1.id, setCharacter)
  }, [useParams1.id])

  return (

    <>
      {character != null ? (

        <div className="container vh-100">

          <div className='row d-lg-flex justify-content-center align-items-center  m-4' id="card">

            <div className="col d-lg-flex justify-content-center align-items-center " >

              <div className="col-lg-6 col-md-10 p-2">

                <img src={character.image} className="card-img-top mt-3 rounded" alt={character.name} style={imgStyles}></img>

              </div>


              <div className="col-lg-6 col-md-10 p-3 card-body">

                <h3 className="text-info">{character.name}</h3>
                <h5>{character.status === "Alive" ? (
                  <>
                    <span className="text-success">Alive</span>
                  </>
                ) : (
                  <>
                    <span className="text-danger">Dead</span>
                  </>
                )}</h5>
                <p className="text-light">
                  <span>Created: </span>
                  <span>{character.created}</span>
                </p>

                <p className="text-light">
                  <span>Especie: </span>
                  <span>{character.species}</span>
                </p>

                <p className="text-light">
                  <span>Gender: </span>
                  <span>{character.gender}</span>
                </p>

                <p className="text-light">
                  <span>Episode: </span>
                  <span>{character.episode?.length || 0}</span>
                </p>

                <p className="text-light">
                  <span>Origin: </span>
                  <span>{character.origin?.name || ""}</span>
                </p>

                <p className="text-light">
                  <span>Location: </span>
                  <span>{character.location?.name || ""}</span>
                </p>

                <button className="btn btn-outline-info" onClick={() => navigate("/characters")} >All Characters</button>


              </div>





            </div>

          </div>

        </div>

      ) : (
        <div className='text-bg-danger'>
          <h3>character not available</h3>
          <button className="btn btn-outline-info" onClick={() => navigate("/characters")} >All Characters</button>
        </div>


      )}

    </>



  )
}

export default Character