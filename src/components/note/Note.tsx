import type { NoteProps, NotesContext } from "../../types/types";
import { useGetContext, useAddNote } from "../../hooks";
import { useRef } from "react";
import { playAudio } from "../../utils/utils";
import "./note.style.css";

export default function Note({
  noteId,
  instrument,
  noteName,
  columnCount: column,
  isActive,
}: NoteProps): React.JSX.Element {
  const { toggleIsOn } = useGetContext("notesContext") as NotesContext;
  const noteRef = useRef<HTMLDivElement>(null);
  const currentNote = useAddNote(noteId, instrument, noteName, column);
  if (!currentNote) return <></>;
  const noteClassName = `note ${currentNote.isNoteOn ? noteName : "note-off"} ${
    isActive ? "active" : ""
  }`;

  const handleNoteClick = () => {
    if (!noteRef.current) {
      throw Error("Current noteRef dose not exists");
    }
    !currentNote.isNoteOn && playAudio(instrument, noteName);
    toggleIsOn(noteId);
  };

  return (
    <div
      id={noteId}
      ref={noteRef}
      className={noteClassName}
      onClick={handleNoteClick}
    ></div>
  );
}
