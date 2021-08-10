import noteService from "../services/notes";

export const createNote = (note) => {
  return async (dispatch) => {
    const newNote = await noteService.createNew(note);
    dispatch({
      type: "NEW_NOTE",
      data: {
        ...newNote,
      },
    });
  };
};

export const toggleImportanceOf = (note) => {
  return async (dispatch) => {
    await noteService.updateNote(note.id, {important: !note.important})
    dispatch({
      type: "TOGGLE_IMPORTANCE",
      data: { id : note.id },
    });
  };
};

export const filterChange = (filter) => {
  return {
    type: "SET_FILTER",
    filter,
  };
};

export const initializeNotes = (notes) => {
  return {
    type: "INIT_NOTES",
    data: notes,
  };
};

export const openNote = (note) => {
  return {
    type: "OPEN_NOTE",
    note: note,
  };
};

export const closeNote = () => {
  return {
    type: "CLOSE_NOTE",
  };
};

export const updateNote = (id, note) => {
  return async (dispatch) => {
    const updatedNote = await noteService.updateNote(id, note);
    dispatch({
      type: "UPDATE_NOTE",
      id: id,
      note: updatedNote,
    });
  };
};

export const openForm = () => {
  return {
    type: "OPEN_FORM",
  };
};

export const closeForm = () => {
  return {
    type: "CLOSE_FORM",
  };
};
