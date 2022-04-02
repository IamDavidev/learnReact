import axios from 'axios'

export const API_RICK_MORTY = axios.create({
    baseURL: "https://rickandmortyapi.com/api/",
})