import { use, useEffect, useState } from "react"
import '../index.css';

import useGlobalReducer from "../hooks/useGlobalReducer"
import { json, Link } from 'react-router-dom';
import { element } from "prop-types";


export const StarWars = () => {

    const { store, dispatch } = useGlobalReducer()
    const btnsFavorite = document.querySelectorAll(".favorite")
    const products = document.querySelectorAll(".card-product")
    const counterFavorite = document.querySelector(".counter-favorite")

    const containerListFavorites = document.querySelector(".container-list-favorite");
    const listFavorites = document.querySelector(".list-favorites");

    let favorites = []


    const updateFavoritesInlocalStorage = () => {
        localStorage.setItem("favorites", JSON.stringify(favorites));
    };

    const loadFavoritesFromLocalStorage = () => {
        const storedFavorites = localStorage.getItem('favorites');
        if (storedFavorites) {
            favorites = JSON.parse(storedFavorites);
            showHTML();
        }
    };

    const toogleFavorite = product => {
        const index = favorites.findIndex(
            element => element.id === product.id);
        if (index > -1) {
            favorites.splice(index, 1);
            updateFavoritesInlocalStorage()
        } else {
            favorites.push(product)
            updateFavoritesInlocalStorage()
        }


    }
    const updateFavoriteMenu = () => {
        listFavorites.innerHTML = "";
        favorites.forEach(product => {
            const favoriteCard = document.createElement("div")
            favoriteCard.classList.add(".card-favorite");

            const titleElemtent = document.createElement("p")
            titleElemtent.classList.add("title")
            favoriteCard.appendChild(titleElemtent)

            listFavorites.appendChild(favoriteCard)
        })
    }

    const showHTML = () => {
        products.forEach(product => {
            const contentCard = product.querySelector(".content-card-product")
            const productId = contentCard.dataset.productId;

            const isFavorite = favorites.some(
                favorite => favorite.id === productId
            );
            const favoriteButton = product.querySelector(".favorite");

            const favoriteButtonActive = product.querySelector("#added-favorite");
            const favoriteRegularIcon = product.querySelector("#favorite-regular");

            favoriteButtonActive.classList.toggle("active", isFavorite)
            favoriteRegularIcon.classList.toggle("active", isFavorite)
            favoriteButton.classList.toggle("favorite-active", isFavorite)

        });

        counterFavorite.textContent = favorites.length;
        updateFavoriteMenu()
    };

    btnsFavorite.forEach(button => {
        button.addEventListener("click", e => {
            const card = e.target.closest(".content-card-product");
            const product = {
                id: card.dataset.productId,
                title: card.querySelector("h5").textContent
            };
            toogleFavorite(product)
            showHTML()
        })
    })
    const btnClose = document.querySelector("#btn-close")
    const buttonHeaderFavorite = document.querySelector("#button-header-favorite")

    buttonHeaderFavorite.addEventListener("click", e =>{
        containerListFavorites.classList.toggle("show");
    })

    btnClose.addEventListener("click", e => {
        containerListFavorites.classList.remove("show");
    })
    
    updateFavoriteMenu();

    useEffect(() => {
        getPersonajes()
        getVehiculos()
        getPlanetas()
    }, [])
    const getPersonajes = async () => {
        const result = await fetch("https://swapi.tech/api/people")
        const data = await result.json()
        dispatch({
            "type": "set_peoples",
            "payload": data.results
        })

    }
    const getVehiculos = async () => {
        const result = await fetch("https://swapi.tech/api/vehicles")
        const data = await result.json()
        dispatch({
            "type": "set_vehicles",
            "payload": data.results
        })

    }

    const getPlanetas = async () => {
        const result = await fetch("https://swapi.tech/api/planets")
        const data = await result.json()
        dispatch({
            "type": "set_planets",
            "payload": data.results
        })

    }


    return (
        <div className="container mt-3">
            <h3 className="text-start">Personajes</h3>
            <div className="d-flex overflow-x-scroll">
                {store.people.map((p) => {
                    return (
                        <div className="container">
                            <div className="row">
                                <div className="col-md-4">
                                    <div class="card card-product" style={{ width: "200px" }}>
                                        <img src="https://imagenes.elpais.com/resizer/v2/PE7OZ47ZSJIWZJID4H2WPIVXMU.jpg?auth=e81e71b9cf73ac447a7b38320eac04a66ba657ce9313d06b79c78115df578845&width=1200" class="card-img-top" style={{ width: "200px", height: "200px" }} alt="..." />
                                        <div class="card-body  content-card-product" data-product-id={p.uid} >
                                            <h5 class="card-title ">{p.name}</h5>
                                            <div className="d-flex justify-content-between ">
                                                <Link to={"/Personaje"}>
                                                    <button className="btn btn-primary">Learn More</button>
                                                </Link>
                                                <button className="favorite btn btn-outline-warning">
                                                    <i>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-heart" viewBox="0 0 16 16" id="favorite-regular">
                                                            <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15" />
                                                        </svg>
                                                    </i>
                                                    <i>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-heart-fill" viewBox="0 0 16 16" id="added-favorite">
                                                            <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314" />
                                                        </svg>
                                                    </i>

                                                </button>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })}

            </div>

            <h3 className="text-start">Planetas</h3>
            <div className="d-flex overflow-x-scroll">
                {store.planets.map((p) => {
                    return (
                        <div className="container">
                            <div className="row">
                                <div className="col-md-4">
                                    <div class="card" style={{ width: "200px" }}>
                                        <img src="https://imagenes.elpais.com/resizer/v2/PE7OZ47ZSJIWZJID4H2WPIVXMU.jpg?auth=e81e71b9cf73ac447a7b38320eac04a66ba657ce9313d06b79c78115df578845&width=1200" class="card-img-top" style={{ width: "200px", height: "200px" }} alt="..." />
                                        <div class="card-body">
                                            <h5 class="card-title">{p.name}</h5>
                                            <div className="d-flex justify-content-between ">
                                                <Link to={"/Personaje"}>
                                                    <button className="btn btn-primary">Learn More</button>
                                                </Link>
                                                <button className="btn btn-outline-warning">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-heart" viewBox="0 0 16 16">
                                                        <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15" />
                                                    </svg>
                                                </button>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })}

            </div>

            <h3 className="text-start">Vehicles</h3>
            <div className="d-flex overflow-x-scroll">
                {store.vehicles.map((p) => {
                    return (
                        <div className="container">
                            <div className="row">
                                <div className="col-md-4">
                                    <div className="card" style={{ width: "200px" }}>
                                        <img src="https://imagenes.elpais.com/resizer/v2/PE7OZ47ZSJIWZJID4H2WPIVXMU.jpg?auth=e81e71b9cf73ac447a7b38320eac04a66ba657ce9313d06b79c78115df578845&width=1200" className="card-img-top" style={{ width: "200px", height: "200px" }} alt="..." />
                                        <div className="card-body">
                                            <h5 className="card-title">{p.name}</h5>
                                            <div className="d-flex justify-content-between ">
                                                <Link to={"/Personaje"}>
                                                    <button className="btn btn-primary">Learn More</button>
                                                </Link>
                                                <button className="btn btn-outline-warning">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-heart" viewBox="0 0 16 16">
                                                        <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15" />
                                                    </svg>
                                                </button>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })}

            </div>
        </div>
    )

}
