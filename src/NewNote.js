import React from "react";
import { useDispatch } from "react-redux";
import {openForm } from "./redux/actions";
import FormButton from "./FormButton";

const NewNote = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <FormButton
        onClick={() => {
          dispatch(openForm());
        }}
      />
    </div>
  );
};
export default NewNote;
