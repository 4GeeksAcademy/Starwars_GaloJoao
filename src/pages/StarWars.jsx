import { use, useEffect, useState } from "react"

export const StarWars = () => {
    const [personajes, setNombresPersonaje] = useState([])
    const [vehiculov] = useState([])
    const [planetas, setPlanetas] = useState([])
    useEffect(() => {
        getpersonajes()
    },)
    const getPersonajes = async () => {
        const result = await fetch("https://swapi.tech/api/people")
        const data = await result.json()
        setNombresPersonaje(data.results)

    }
    const getVehiculos = async () => {
        const result = await fetch("https://swapi.tech/api/vehiculos")
        const data = await result.json()
        setNombresPersonaje(data.results)

    }

        const getPlanetas = async () => {
        const result = await fetch("https://swapi.tech/api/planetas")
        const data = await result.json()
        setNombresPersonaje(data.results)

    }


    return (
        <div>

        </div>
    )
}