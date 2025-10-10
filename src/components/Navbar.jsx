import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";

export const Navbar = () => {

	const { store } = useGlobalReducer()

	return (
		<nav className="navbar navbar-light bg-black">
			<div className="container">
				<Link to="/">
					<img src="https://lumiere-a.akamaihd.net/v1/images/sw_logo_stacked_2x-52b4f6d33087_7ef430af.png?region=0,0,586,254" style={{ width: "170px", height: "100px" }} alt="" />
				</Link>
				<div className="dropdown " >
					<button type="button" className="btn btn-primary dropdown-toggle " data-bs-toggle="dropdown" aria-expanded="false" id="button-header-favorite">
						<svg className="ms-2 bi bi-heart-fill" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
							<path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314" />
						</svg>
						<span className="counter-favorite ps-1">{store.favorites.length}</span>
					</button>
					<ul className="dropdown-menu container-list-favorites">
						<span className="ps-1 pe-3">Mis favoritos</span>
						<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16" id="btn-close">
							<path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
						</svg>
						<hr />
						<div className="list-favorites">
							{store.favorites.map((f) => {
								return (
									<div className="card-favorite">
										<p className="title">{f}</p>
									</div>
								)
							})}
						</div>
					</ul>
				</div>
			</div>
		</nav>
	);
};