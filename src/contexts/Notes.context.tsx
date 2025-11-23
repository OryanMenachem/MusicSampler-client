import { createContext, useState } from "react";
import type { NotesContext, Notes, NoteId } from "../types/types";

const notesContext = createContext<NotesContext | null>(null);

function NotesProvider({ children }: { children: React.ReactNode }) {
  const [notes, setNotes] = useState<Notes>({});
  const toggleIsOn = (noteId: NoteId) => {
    setNotes((prev) => ({
      ...prev,
      [noteId]: !prev[noteId],
    }));
  };

  return (
    <notesContext.Provider value={{ notes, setNotes, toggleIsOn }}>
      {children}
    </notesContext.Provider>
  );
}

export { notesContext, NotesProvider };
