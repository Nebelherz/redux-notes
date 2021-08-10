const initialState = [
  {
    title: 'reducer defines how redux store works',
    important: true,
    id: 1,
  },
  {
    title: 'state of store can contain any data',
    important: false,
    id: 2,
  },
]

export const noteReducer = (state = [], action) => {
  switch (action.type) {
    case 'NEW_NOTE':
      return state.concat(action.data)
    case 'INIT_NOTES':
      return action.data
    case 'TOGGLE_IMPORTANCE': {
      const id = action.data.id
      const noteToChange = state.find(n => n.id === id)
      const changedNote = {
        ...noteToChange,
        important: !noteToChange.important
      }
      return state.map(note =>
        note.id !== id ? note : changedNote
      )
    }
    case "UPDATE_NOTE": {
      const id = action.id
      const noteToChange = state.find(n => n.id === id)
      const changedNote = {
        ...noteToChange,
        ...action.note
      }
      return state.map(note =>
        note.id !== id ? note : changedNote
      )
    }
    default:
      return state
  }
}