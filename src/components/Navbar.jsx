import { Link } from "react-router-dom";

export const Navbar = () => {

	return (
		<nav className="navbar navbar-light bg-black">
			<div className="container">
				<Link to="/">
				<img src="https://lumiere-a.akamaihd.net/v1/images/sw_logo_stacked_2x-52b4f6d33087_7ef430af.png?region=0,0,586,254" style={{width:"170px", height: "100px"}} alt="" />
				</Link>
				<div className="dropdown" >
					<button type="button" className="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">Favoritos
						<svg className="ms-2 bi bi-heart-fill" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"  viewBox="0 0 16 16">
							<path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314" />
						</svg>
						<span className="counter-favorite">0</span>
					</button>
					<ul className="dropdown-menu">
						<div className="lista-favoritos" id="container-list-favorites" style={{display:"none"}}>

						</div>
					</ul>
				</div>
			</div>
		</nav>
	);
};