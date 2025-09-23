import { use, useEffect, useState } from "react"
import useGlobalReducer from "../hooks/useGlobalReducer"

export const StarWars = () => {

    const {store, dispatch} = useGlobalReducer()



    useEffect(() => {
        getPersonajes(),getVehiculos(),
        getPlanetas()
    },)
    const getPersonajes = async () => {
        const result = await fetch("https://swapi.tech/api/people")
        const data = await result.json()
        dispatch({"type":'set_peoples',
            "payload": data.results
        })

    }
    const getVehiculos = async () => {
        const result = await fetch("https://swapi.tech/api/vehicle")
        const data = await result.json()
        dispatch({"type":'set_vehicle',
            "payload": data.results
        })
    }

        const getPlanetas = async () => {
        const result = await fetch("https://swapi.tech/api/planets")
        const data = await result.json()
        dispatch({"type":'set_planets',
            "payload": data.results
        })

    }


    return (
        <div>
            <h3>Personajes</h3>
            {store.people.map((p)=> {
                return (
                    <p>{p.name}</p>
                )
            })}

            <h3>Planetas</h3>
            {store.planets.map((p)=> {
                return (
                    <p>{p.name}</p>
                )
            })}

            <h3>Vehiculos</h3>
            {store.vehicles.map((p)=> {
                return (
                    <p>{p.name}</p>
                )
            })}
        </div>
    )
}