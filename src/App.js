import React, { useEffect } from "react";
import Notes from "./Notes";
import NewNote from "./NewNote";
import Filter from "./Filter";
import noteService from "./services/notes";
import { initializeNotes } from "./redux/actions";
import { useDispatch } from "react-redux";
import Modal from "./Modal/Modal";
import ModalForm from "./Modal/ModalForm";

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    noteService.getAll().then((notes) => dispatch(initializeNotes(notes)));
  }, [dispatch]);

  return (
    <div className="wrapper">
      <div className="d-flex align-items-center">
        <Filter />
        <NewNote />
      </div>
      <Notes />
      <Modal />
      <ModalForm />
    </div>
  );
};
