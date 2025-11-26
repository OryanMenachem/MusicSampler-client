import { useEffect } from "react";
import type {
  NoteId,
  Instrument,
  NoteName,
  Column,
  NotesContext,
  NoteState,
} from "../types/types";
import useGetContext from "./UseGetContext";

export default function useAddNote(
  noteId: NoteId,
  instrument: Instrument,
  noteName: NoteName,
  column: Column
): NoteState {
  const { notes, setNotes } = useGetContext("notesContext") as NotesContext;
  useEffect(() => {
    setNotes((prev) => {
      if (prev[noteId]) return prev;
      return {
        ...prev,
        [noteId]: {
          isNoteOn: false,
          instrument,
          noteName,
          columnCount: column,
        },
      };
    });
  }, [noteId, instrument, noteName, setNotes]);

  return notes[noteId];
}
