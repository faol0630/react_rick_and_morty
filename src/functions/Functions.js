import axios from "axios"

const reqApi = async(page, state) => {
    const request1 = await axios.get(`https://rickandmortyapi.com/api/character?page=${page}`)
    state(request1.data.results)
    // results hace parte del json de la api

}

const uniqueCharacter = async (id, state) =>{

    const requestUnique = await axios.get(`https://rickandmortyapi.com/api/character/${id}`)
    state(requestUnique.data)

}



export {

    reqApi,
    uniqueCharacter
}