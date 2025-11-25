import { useContext, useEffect } from "react";
import { notesContext } from "../contexts/Notes.context";
import type {
  NoteId,
  NoteState,
  NoteName,
  Instrument,
  NotesContext,
  Column,
} from "../types/types";

// import { contextMap } from "../utils/utils";
// const useGetContext = (contextName : string) => {
//   const context = useContext(contextMap[contextName]);
//   if (!context) {
//     throw Error(`${contextName} is null`);
//   }
//   return context;
// };

const useAddNote = (
  noteId: NoteId,
  instrument: Instrument,
  noteName: NoteName,
  column: Column
): NoteState => {
  const { notes, setNotes } = useContext(notesContext) as NotesContext;
  useEffect(() => {
    setNotes((prev) => {
      if (prev[noteId]) return prev;
      return {
        ...prev,
        [noteId]: {
          isNoteOn: false,
          instrument,
          noteName,
          column,
        },
      };
    });
  }, [noteId, instrument, noteName, setNotes]);

  return notes[noteId];
};



export { useAddNote  };
