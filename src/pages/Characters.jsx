import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../context/UserContext'
import { backToHome, reqApi, handlePageClick } from '../functions/Functions'
import Card from '../components/Card'
import Search from '../components/Search'
import ReactPaginate from 'react-paginate'

const Characters = () => {


    const { page, setPage } = useContext(UserContext)

    const { setCharacters } = useContext(UserContext)

    const { search, setSearch } = useContext(UserContext)

    const navigate = useNavigate()

    const { inputRef } = useContext(UserContext)

    useEffect(() => {


        reqApi(page, setCharacters, search)


    }, [page, setCharacters, search])


    return (

        <div className="container-fluid text-center" >

            <div className="row justify-content-center">

                <div className="col-10 col-sm-8 col-md-6 col-lg-4 ">

                    <h1 className=" text-bg-info rounded px-2 mt-2 mx-auto">Characters</h1>
                    <button className="btn btn-outline-info m-3" onClick={() => { backToHome(navigate) }}>Home</button>

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
                    <button className="btn btn-outline-info col-md-3 col-sm-6 col-8 m-1 my-2" onClick={() => { backToHome(navigate) }}>Home</button>
                    
                </div>
            </div>

            <div className="row ">

                <ReactPaginate

                    previousLabel={"Previous"}
                    nextLabel={"Next"}
                    breakLabel={"..."}
                    pageCount={42}
                    marginPagesDisplayed={3}
                    pageRangeDisplayed={3}
                    forcePage={page - 1}
                    onPageChange={ (data) => {handlePageClick(data, inputRef, setSearch, setPage, page, setCharacters, search) }}
                    //boostrap
                    containerClassName={"pagination justify-content-center"}
                    previousClassName={"previousClass page-link text-bg-danger"}
                    nextClassName={"nextClass page-link bg-danger"}
                    breakClassName={"page-item"}
                    breakLinkClassName={"page-link bg-secondary text-light"}
                    pageClassName={"page-item"}
                    pageLinkClassName={"page-link text-light bg-secondary"}
                    activeClassName={"active"}
                />

            </div>



            <div className="row">
                <p className="btn btn-outline-info col-4 offset-4 rounded p-2">Page: {page}</p>

            </div>



        </div>
    )
}

export default Characters