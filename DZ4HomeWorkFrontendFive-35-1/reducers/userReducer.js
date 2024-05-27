const defaultState = {
    user: { name: '', age: '', gender: '' },
    profile: 'public'
  }
  
  const userReducer = (state = defaultState, action) => {
    switch (action.type) {
      case 'UPDATE_USER':
        return { ...state, user: action.payload }
      case 'UPDATE_PROFILE':
        return { ...state, profile: action.payload }
      default:
        return state
    }
  }
  
  export default userReducer
  