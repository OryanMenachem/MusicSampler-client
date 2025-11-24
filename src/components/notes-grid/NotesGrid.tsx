import { useState } from "react";
import Note from "../note/Note";
import { NoteNames, noteAudioMap } from "../../utils/utils";
import { useGetNotesContext, useGetInstrumentContext } from "../../hooks/hooks";
import type { Notes } from "../../types/types";
import "./notesGrid.style.css";

export default function NotesGrid() {
  const { notes, setNotes } = useGetNotesContext();
  const {instrument} = useGetInstrumentContext();
  const [columns, setColumns] = useState<number>(20);
  return (
    <div className="notes-grid">
      {NoteNames.map((note) => (
        <div key={note} className="notes-grid-row">
          {Array(columns)
            .fill(note)
            .map((n, i) => (
              <Note
                key={`${note}-${i}`}
                noteId={`${note}-${i}`}
                instrument={instrument}
                noteName={n}
              />
            ))}
        </div>
      ))}

      <button onClick={() => setColumns((prev) => prev + 1)}>
        Add Columns
      </button>
      <button onClick={() => setColumns((prev) => prev - 1)}>
        Removing Columns
      </button>
      <button onClick={() => player(notes)}>Play</button>
      <button onClick={() => restart(setNotes, notes)}>restart</button>
    </div>
  );
}

const restart = (
  setNotes: React.Dispatch<React.SetStateAction<Notes>>,
  notes: Notes
): void => {
  for (const key in notes) {
    setNotes((prev) => ({
      ...prev,
      [key]: {
        ...prev[key],
        isNoteOn: false,
      },
    }));
  }
};
const player = async (notes: Notes) => {
  for (const key in notes) {
    const note = notes[key];
    if (note.isNoteOn) {
      const audio = noteAudioMap[note.instrument!]![
        note.noteName
      ]!.cloneNode() as HTMLAudioElement;
      audio.play();
      await new Promise<void>((resolve) => {
        setTimeout(resolve, 400);
      });
    }
  }
};
