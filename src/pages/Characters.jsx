import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../context/UserContext'
import { backToHome, nextPage, previousPage, reqApi } from '../functions/Functions'
import Card from '../components/Card'
import Search from '../components/Search'

const Characters = () => {


    const { page, setPage } = useContext(UserContext)

    const { setCharacters } = useContext(UserContext)

    const { search, setSearch } = useContext(UserContext)

    const navigate = useNavigate()

    const { inputRef } = useContext(UserContext)

    //-----------------------------------------------------------------------------------------------------

    useEffect(() => {

        reqApi(page, setCharacters, search)


    }, [page, setCharacters, search])


    return (

        <div className="container-fluid text-center" >

            <div className="row justify-content-center">

                <div className="col-10 col-sm-8 col-md-6 col-lg-4 ">

                    <h1 className=" text-bg-info rounded px-2 mt-2 mx-auto">Characters</h1>
                    <button className="btn btn-outline-info m-3" onClick={ () => {backToHome(navigate) }}>Home</button>

                </div>

            </div>


            <div className="row justify-content-center">

                <Search />

            </div>


            <div className="row justify-content-center">

                <Card />

            </div>


            <div className="row ">
                <div className="col">
                    <button className="btn btn-outline-warning col-md-3 col-sm-6 col-8 m-1 my-2" onClick={ () => {previousPage(search, setSearch, page, setPage, inputRef, setCharacters)}} >Previous page</button>
                    <button className="btn btn-outline-info col-md-3 col-sm-6 col-8 m-1 my-2" onClick={ () => {backToHome(navigate) }}>Home</button>
                    <button className="btn btn-outline-danger col-md-3 col-sm-6 col-8 m-1 my-2" onClick={ () => {nextPage(search, setSearch, page, setPage, inputRef, setCharacters)}}>Next page</button>
                </div>
            </div>


            <div className="row">
                <p className="text-bg-danger col-4 offset-4 rounded p-2">Page: {page}</p>

            </div>
        </div>
    )
}

export default Characters