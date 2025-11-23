import type { NoteProps } from "../../types/types";
import { useRef } from "react";
import { useGetNotesContext, useGetNote } from "../../hooks/hooks";
import { getNoteSrc } from "./note.service";
import "./note.css";

export default function Note({
  noteId,
  instruments,
  musicalNote,
}: NoteProps): React.JSX.Element {
  const { toggleIsOn } = useGetNotesContext();
  const noteRef = useRef<HTMLDivElement>(null);
  const isNoteOn = useGetNote(noteId);
  const noteSrc = getNoteSrc(instruments, musicalNote);

  const toggleNote = () => {
    if (noteRef.current) {
      toggleIsOn(noteRef.current.id);
      const audio = noteRef.current?.querySelector("audio") as HTMLAudioElement;
      if (!isNoteOn) {
        noteRef.current.classList.replace("note-off", musicalNote);
        audio.play();
      } else {
        noteRef.current.classList.replace(musicalNote, "note-off");
        audio.load();
      }
    } else {
      throw Error("Current noteRef dose not exists");
    }
  };

  return (
    <div
      id={noteId}
      ref={noteRef}
      className="note note-off"
      onClick={toggleNote}
    >
      <audio src={noteSrc} preload="auto"></audio>
    </div>
  );
}
