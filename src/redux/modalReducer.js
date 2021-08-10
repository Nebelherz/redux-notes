
const initialState = {
  showNote: false,
  showForm: false
}

export const modalReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'OPEN_NOTE':
      return {...state, showNote: true, noteToShow: action.note}
    case 'CLOSE_NOTE': 
      return {...state, showNote: false}
    case 'OPEN_FORM':
      return {...state, showForm: true}
    case 'CLOSE_FORM':
      return {...state, showForm: false}
    default:
      return state
  }
}
