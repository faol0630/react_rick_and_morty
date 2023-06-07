import axios from "axios"

const reqApi = async (page, setCharacters, search) => {


    try{

        const request1 = await axios.get(`https://rickandmortyapi.com/api/character/?page=${page}&name=${search}`)
        
        const answer = request1.data.results
        
        if (answer.length === 0) {

            //lo que ponga aca no se está ejecutando
            setCharacters([])
        } else {
            setCharacters(answer)
            // results hace parte del json de la api
            
        }


    }catch(err){
        // alert(err)
        //lo que ponga aca es lo que se va a ejecutar cuando search no coincide
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

const nextPage = (search, setSearch, page, setPage, inputRef, setCharacters) => {

    setSearch("")

    handleClick(inputRef)

    if (page <= 41) {

        setPage(page + 1)
        reqApi(page, setCharacters, search)
    }
}

const previousPage = (search, setSearch, page, setPage, inputRef, setCharacters) => {

    setSearch("")

    handleClick(inputRef)

    if (page >= 2) {

        setPage(page - 1)
        reqApi(page, setCharacters, search)
    }
}

const backToHome = (navigate) => {
    navigate("/")
}

const goToCharacters = (navigate) => {
    navigate("/characters")
}



export {

    reqApi,
    uniqueCharacter,
    handleClick,
    nextPage,
    previousPage,
    backToHome,
    goToCharacters

}