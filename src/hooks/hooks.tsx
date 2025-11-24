import { useContext, useEffect, useState } from "react";
import { notesContext, instrumentContext } from "../contexts/Contexts";
import type {
  NotesContext,
  NoteId,
  Notes,
  NoteState,
  NoteName,
  Instrument,
  InstrumentContext,
} from "../types/types";

const useGetNotesContext = (): NotesContext => {
  const context = useContext(notesContext);
  if (!context) {
    throw Error("notesContext is null");
  }
  return context;
};

const useGetInstrumentContext = (): InstrumentContext => {
  const context = useContext(instrumentContext);
  if (!context) {
    throw Error("instrumentContext is null");
  }
  return context;
};

const useAddNote = (
  noteId: NoteId,
  instrument: Instrument,
  noteName: NoteName
): NoteState => {
  const { notes, setNotes } = useGetNotesContext();
  useEffect(() => {
    setNotes((prev) => {
      if (prev[noteId]) return prev;
      return {
        ...prev,
        [noteId]: {
          isNoteOn: false,
          instrument: instrument,
          noteName: noteName,
        },
      };
    });
  }, [noteId, instrument, noteName, setNotes]);

  return notes[noteId];
};

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

export { useAddNote, useGetNotesContext, useGetNotesContextValue , useGetInstrumentContext};
