import React, { useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import { CSSTransition } from "react-transition-group";
import { useSelector, useDispatch } from "react-redux";
import TextareaAutosize from "react-autosize-textarea";

import { closeNote, updateNote } from "../redux/actions";
import "./Modal.scss";

const Modal = () => {
  const show = useSelector((state) => state.modal.showNote);
  const note = useSelector((state) => state.modal.noteToShow);
  const dispatch = useDispatch();

  const titleRef = useRef(null);
  const contentRef = useRef(null);
  const importantRef = useRef(null);

  const close = () => {
    dispatch(closeNote());
  };

  const handleUpdate = () => {
    dispatch(
      updateNote(note.id, {
        title: titleRef.current.value.trim(),
        content: contentRef.current.value.trim(),
        important: importantRef.current.checked,
      })
    );
  };

  const closeOnEscapeKeyDown = (e) => {
    if ((e.charCode || e.keyCode) === 27) {
      close();
    }
  };

  useEffect(() => {
    document.body.addEventListener("keydown", closeOnEscapeKeyDown);
    return function cleanup() {
      document.body.removeEventListener("keydown", closeOnEscapeKeyDown);
    };
  }, []);

  return ReactDOM.createPortal(
    <CSSTransition in={show} unmountOnExit timeout={{ enter: 0, exit: 300 }}>
      <div className="modal" onClick={close}>
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          <div className="modal-header">
            <input
              type="text"
              className="form-control-plaintext"
              defaultValue={note?.title}
              ref={titleRef}
              placeholder={"Title"}
            />
          </div>
          <TextareaAutosize
            className="modal-body"
            style={{ padding: "15px", border: "0px", boxShadow: "none" }}
            rows={6}
            defaultValue={note?.content}
            ref={contentRef}
            placeholder={"Content"}
          />
          <div className="modal-footer">
            <div className="flex-grow-1 ">
              <input
                type="checkbox"
                className="form-check-input"
                defaultChecked={note?.important}
                id='updateNote'
                ref={importantRef}
              />
              <label className="form-check-label" htmlFor='updateNote'>
                <em className="m-2">important</em>
              </label>
            </div>
            <button
              className="btn"
              onClick={() => {
                console.log(titleRef.current.value, contentRef.current.value);
                handleUpdate();
                close();
              }}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="23"
                height="23"
                fillRule="currentColor"
                className="bi bi-check2"
                viewBox="0 0 16 16">
                <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </CSSTransition>,
    document.getElementById("root")
  );
};

export default Modal;
