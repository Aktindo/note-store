"use client";

import { FunctionComponent, useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { Storage } from "../handlers/Storage";
import Button from "./form/Button";
import Input from "./form/Input";

interface NoteProps {
  id: number;
  title: string;
  description?: string;
  onNoteDelete: (id: number) => void;
}

const Note: FunctionComponent<NoteProps> = ({
  title,
  description = "",
  id,
  onNoteDelete,
}) => {
  const [visibleStatusNotes, setVisibleStatusNotes] = useState<number[]>([]);
  const [editingStatusNotes, setEditingStatusNotes] = useState<number[]>([]);

  const visibleNotesHandler = () => {
    if (!visibleStatusNotes.includes(id)) {
      setVisibleStatusNotes([...visibleStatusNotes, id]);
    } else {
      const newVisibleNotes = visibleStatusNotes.filter(
        (visibleNote) => visibleNote !== id
      );
      setVisibleStatusNotes(newVisibleNotes);
    }
  };

  const editingStatusNotesHandler = () => {
    if (!editingStatusNotes.includes(id)) {
      setEditingStatusNotes([...editingStatusNotes, id]);
    } else {
      const newEditingNotes = editingStatusNotes.filter(
        (editingNote) => editingNote !== id
      );
      setEditingStatusNotes(newEditingNotes);
    }
  };

  return (
    <div
      className={`note-${id} cursor-pointer hover:bg-opacity-20 transition duration-150 ease-in-out rounded-2xl bg-white bg-opacity-30 m-2 p-5`}
    >
      <div className="overlay flex items-center" onClick={visibleNotesHandler}>
        <p className="text-xl md:text-2xl font-bold">
          {!editingStatusNotes.includes(id) ? (
            title
          ) : (
            <Input onChange={() => {}} inputValue={title} />
          )}
        </p>
        <button
          onClick={() =>
            !editingStatusNotes.includes(id) && visibleNotesHandler
          }
          className="ml-auto"
        >
          {visibleStatusNotes.includes(id) ? (
            <FiChevronUp size="30" />
          ) : (
            <FiChevronDown size="30" />
          )}
        </button>
      </div>
      {visibleStatusNotes.includes(id) && (
        <div className="overlay-content flex mt-5 max-height">
          {!editingStatusNotes.includes(id) ? (
            <Button
              className="mr-2"
              onClick={editingStatusNotesHandler}
              disabled
              label="Edit"
            />
          ) : (
            <div className="flex items-center">
              <Button onClick={() => {}} label="Save" className="mr-2" />
              <Button
                onClick={editingStatusNotesHandler}
                className="mr-2"
                variant="flat"
                label="Cancel"
              />
            </div>
          )}
          <Button
            onClick={() => onNoteDelete(id)}
            label="Delete"
            variant="error"
          />
        </div>
      )}
    </div>
  );
};

export default Note;
