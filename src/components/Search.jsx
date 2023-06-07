import React, { useContext } from 'react'
import { UserContext } from '../context/UserContext';

const Search = () => {

    const { setPage } = useContext(UserContext)

    const { setSearch } = useContext(UserContext)

    const { inputRef } = useContext(UserContext)


    return (
        <div className="container">

            <div className="row justify-content-center">

                <div className="col-10 col-sm-8 col-md-6 col-lg-4 ">

                    <form className="form d-flex flex-sm-row flex-column align-items-center justify-content-center gap-4 mb-5">

                        <input
                            className="form-control bg-dark text-info"
                            id="search_input"
                            ref={inputRef}
                            type="text"
                            onChange={(e) => {

                                setPage(1);
                                setSearch(e.target.value)

                            }}

                        />

                    </form>

                </div>

            </div>

        </div>
    )
}

export default Search