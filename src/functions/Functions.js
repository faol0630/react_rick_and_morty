import axios from "axios"

const reqApi = async (page, setCharacters, search) => {

    try {


        const request1 = await axios.get(`https://rickandmortyapi.com/api/character/?page=${page}&name=${search}`)

        const answer = request1.data.results
        // results hace parte del json de la api

        setCharacters(answer)

    } catch (err) {

        setCharacters([])
        
    }

}

const uniqueCharacter = async (id, state) => {

    const requestUnique = await axios.get(`https://rickandmortyapi.com/api/character/${id}`)
    state(requestUnique.data)

}

//dejar el input en blanco cuando se cambia de pagina:
const handleClick = (inputRef) => {
    
    if (inputRef.current) {
        inputRef.current.value = "";
    }
};

const backToHome = (navigate) => {
    navigate("/")
}

const goToCharacters = (navigate) => {
    navigate("/characters")
}


//metodo para react paginate:

const handlePageClick = (data, inputRef, setSearch, setPage, page, setCharacters, search) => {

    handleClick(inputRef)

    setSearch("")

    setPage(data.selected + 1)

    reqApi(page, setCharacters, search)

}


export {

    reqApi,
    uniqueCharacter,
    handleClick,
    backToHome,
    goToCharacters,
    handlePageClick

}