export const actionType = {
    SET_USER: "SET_USER",
    SET_BEERS: "SET_BEERS",
  };
  
  const reducer = (state, action) => {
     //console.log(action);
  
    switch (action.type) {
      case actionType.SET_USER:
        return {
          ...state,
          user: action.user,
        };
  
      case actionType.SET_BEERS:
        return {
          ...state,
          beers: action.beers,
        };
  
      default:
        return state;
    }
  };
  
  export default reducer;