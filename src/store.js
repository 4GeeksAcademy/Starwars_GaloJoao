export const initialStore=()=>{
  return{
   planets: [],
   people: [],
   vehicles: [],
   favorites: []
  }
}

export default function storeReducer(store, action = {}) {
  switch(action.type){

      case 'set_planets':
        return {
          ...store,
          planets: action.payload
        }
      case 'set_vehicles':
        return {
          ...store,
          vehicles: action.payload
        }
      case 'set_peoples':
        return {
          ...store,
          people: action.payload
        }

      case 'set_favorites':
        return {
          ...store,
          favorites: [...store.favorites, action.payload]
        }

    default:
      throw Error('Unknown action.');
  }    
}