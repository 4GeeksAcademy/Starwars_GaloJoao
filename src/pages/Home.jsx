import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { StarWars } from "./StarWars.jsx";

export const Home = () => {

  const {store, dispatch} =useGlobalReducer()

	return (
	<StarWars/>
	);
}; 