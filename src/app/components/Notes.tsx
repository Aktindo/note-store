"use client";

import Input, { InputProps } from "./form/Input";
import { ChangeEvent, FunctionComponent, useEffect, useState } from "react";
import Note from "./Note";
import { Storage, Note as NoteI } from "../handlers/Storage";
import { FiInbox } from "react-icons/fi";

interface NotesProps {}

const Notes: FunctionComponent<NotesProps> = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [notes, setNotes] = useState<Array<NoteI>>([]);
  const [inputValue, setInputValue] = useState<string | null>(null);

  const inputValueHandler = (e: ChangeEvent<InputProps>) => {
    setInputValue(e.target.value as string);
    console.log(e.target.value);
  };

  const inputButtonHandler = () => {
    const newNotes = Storage.addNote(inputValue || "");
    setNotes(newNotes);
    setInputValue("");
  };

  const onNoteDeleteHandler = (id: number) => {
    const newNotes = Storage.deleteNote(id);
    setNotes(newNotes);
  };

  useEffect(() => {
    setNotes(Storage.getNotes());
    setLoading(false);
  }, []);

  return (
    <div className="notes">
      <Input
        inputValue={inputValue}
        onClick={inputButtonHandler}
        onChange={inputValueHandler}
        label="Add A Note"
        withButton
      />
      <div className="notes__main grid grid-flow-row auto-rows-max mt-5">
        {!loading ? (
          notes.length ? (
            notes.map((note, key) => (
              <Note
                key={key}
                id={note.id}
                title={note.title}
                description={note.description}
                onNoteDelete={onNoteDeleteHandler}
              />
            ))
          ) : (
            <div className="no-notes text-center grid w-full justify-center mt-10">
              <FiInbox size="50" className="mx-auto" />
              <p className="text-xl opacity-60 font-bold">
                No notes added yet.
              </p>
              <p className="text-2xl flex font-bold">
                Add your first note above.
              </p>
            </div>
          )
        ) : (
          <div className="notes-loading">
            {[
              [...Array(5)].map((item, index) => (
                <div
                  key={index}
                  className="w-full my-2 bg-primary opacity-30 animate-pulse p-9 rounded-2xl"
                ></div>
              )),
            ]}
          </div>
        )}
      </div>
    </div>
  );
};

export default Notes;
