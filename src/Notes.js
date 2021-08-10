import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleImportanceOf, openNote} from './redux/actions'

const Note = ({ note }) => {
  const dispatch = useDispatch()

  const onCardClick = () => {
    dispatch(openNote(note))
  }

  return (
    < div className="card m-2" style={{ width: '18rem' }}>
      <div className="card-body" onClick={onCardClick}>
        <p className="card-text" >{note.title}</p>
        <div onClick={(e)=>{e.stopPropagation();}}>
          <input type="checkbox" className="form-check-input" checked={note.important} 
            onChange={() => dispatch(toggleImportanceOf(note))} id={note.id} />
          <label className="form-check-label" htmlFor={note.id}><em className="m-2">important</em></label>
        </div>
      </div>
    </div>
  )
}

const Notes = () => {
  const notes = useSelector(state => {
    if (state.filter === 'ALL') {
      return state.notes
    }
    return state.filter === 'IMPORTANT'
      ? state.notes.filter(note => note.important)
      : state.notes.filter(note => !note.important)
  })

  return (
    <div className="d-flex flex-wrap">  
      {notes.map(note =>
        <Note
          key={note.id}
          note={note}
        />
      )}
    </div>
  )
}

export default Notes