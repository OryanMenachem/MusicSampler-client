import { useContext, useEffect } from "react";
import { notesContext } from "../contexts/Notes.context";
import type { NotesContext, NoteId, IsNoteOn } from "../types/types";

const useGetNotesContext = (): NotesContext => {
  const context = useContext(notesContext);
  if (!context) {
    throw Error("notesContext is null");
  }
  return context;
};

const useGetNote = (noteId: NoteId): IsNoteOn => {
  const { notes, setNotes } = useGetNotesContext();
  useEffect(() => {
    if (!Object.hasOwn(notes, noteId)) {
      setNotes((prev) => ({
        ...prev,
        [noteId]: false,
      }));
    }
  }, [noteId, setNotes]);

  return notes[noteId];
};

export { useGetNote, useGetNotesContext };
