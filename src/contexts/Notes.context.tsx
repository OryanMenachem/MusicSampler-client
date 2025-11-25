import { createContext, useState } from "react";
import type { NotesContext, Notes, NoteId } from "../types/types";

export const notesContext = createContext<NotesContext | null>(null);

export default function NotesProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const { notes, setNotes, toggleIsOn } = useGetNotesContextValue();
  return (
    <notesContext.Provider value={{ notes, setNotes, toggleIsOn }}>
      {children}
    </notesContext.Provider>
  );
}

const useGetNotesContextValue = () => {
  const [notes, setNotes] = useState<Notes>({});
  const toggleIsOn = (noteId: NoteId) => {
    setNotes((prev) => ({
      ...prev,
      [noteId]: {
        ...prev[noteId],
        isNoteOn: !prev[noteId].isNoteOn,
      },
    }));
  };

  return { notes, setNotes, toggleIsOn };
};
