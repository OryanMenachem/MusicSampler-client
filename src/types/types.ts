import type { Dispatch, SetStateAction } from "react";

type MusicalNotes = "DO" | "RE" | "MI" | "FA" | "SOL" | "LA" | "TI";

type Instruments = "PIANO" | "SAXOPHONE";

type NoteSrc = Partial<Record<Instruments, Partial<Record<MusicalNotes, URL>>>>;

interface NoteProps {
  noteId: NoteId;
  instruments: Instruments;
  musicalNote: MusicalNotes;
}

type IsNoteOn = boolean;
type NoteId = string;
type Notes = Record<NoteId, IsNoteOn>;

interface NotesContext {
  notes: Notes;
  setNotes: Dispatch<SetStateAction<Notes>>;
  toggleIsOn: (noteId: NoteId) => void;
}

export type {
  NoteProps,
  Notes,
  MusicalNotes,
  NotesContext,
  Instruments,
  NoteId,
  NoteSrc,
  IsNoteOn,
};
