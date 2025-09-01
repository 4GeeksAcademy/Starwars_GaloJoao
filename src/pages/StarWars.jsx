import { use, useEffect, useState } from "react"

export const StarWars = () => {
    const [nombrePersonajes, setNombresPersonaje] = useState([])
    useEffect(() => {
        getNombrePersonajes()
    },)
    const getNombrePersonajes = async () => {
        const result = await fetch("https://swapi.tech/api/people/?name")
        const data = result.json()
        setNombresPersonaje(data)


    }
    const personajes = nombrePersonajes.find(producto => producto.id > '0')
    console.log(personajes)

    return (
        <div>

        </div>
    )
}