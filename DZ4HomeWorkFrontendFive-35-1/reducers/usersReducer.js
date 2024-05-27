const initialState = {
    users: [
      { id: 1, first_name: "Caron", email: "clindup0@sourceforge.net", gender: "Female", birth_date: "24/08/2023" },
    ],
    currentUser: null
  }
  
  const usersReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_CURRENT_USER':
        return { ...state, currentUser: action.payload }
      case 'UPDATE_USER_DETAILS':
        return {
          ...state,
          users: state.users.map(user => user.id === action.payload.id ? action.payload : user)
        }
      default:
        return state
    }
  }
  
  export default usersReducer
  