import type { NoteProps, NotesContext } from "../../types/types";
import { useContext, useRef } from "react";
import { useAddNote } from "../../hooks/hooks";
import { playAudio } from "../../utils/utils";
import "./note.style.css";
import { notesContext } from "../../contexts/Notes.context";

export default function Note({
  noteId,
  instrument,
  noteName,
  column,
}: NoteProps): React.JSX.Element {
  const { toggleIsOn } = useContext(notesContext) as NotesContext;
  const noteRef = useRef<HTMLDivElement>(null);
  const currentNote = useAddNote(noteId, instrument, noteName, column);
  if (!currentNote) return <></>;
  const noteClassName = `note ${currentNote.isNoteOn ? noteName : "note-off"}`;

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
