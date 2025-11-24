import type { NoteProps } from "../../types/types";
import { useRef } from "react";
import { useGetNotesContext, useAddNote } from "../../hooks/hooks";
import { playAudio } from "../../utils/utils";
import "./note.style.css";

export default function Note({
  noteId,
  instrument,
  noteName,
}: NoteProps): React.JSX.Element {
  const { toggleIsOn } = useGetNotesContext();
  const noteRef = useRef<HTMLDivElement>(null);
  const currentNote = useAddNote(noteId, instrument, noteName);
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
