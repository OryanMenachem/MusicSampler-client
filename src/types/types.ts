import type { Dispatch, SetStateAction } from "react";

type NoteName = "DO" | "RE" | "MI" | "FA" | "SOL" | "LA" | "TI";

type Instrument = "PIANO" | "SAXOPHONE";

type NoteAudioMap = Partial<
  Record<Instrument, Partial<Record<NoteName, HTMLAudioElement>>>
>;

type NoteProps = {
  noteId: NoteId;
} & NoteState;

interface NoteState {
  isNoteOn?: boolean;
  instrument: Instrument;
  noteName: NoteName;
}

type NoteId = string;
type Notes = Record<NoteId, NoteState>;

interface NotesContext {
  notes: Notes;
  setNotes: Dispatch<SetStateAction<Notes>>;
  toggleIsOn: (noteId: NoteId) => void;
}

interface InstrumentContext {
  instrument: Instrument;
  setInstrument: Dispatch<SetStateAction<Instrument>>;
}

interface GridNotes {}

export type {
  NoteProps,
  Notes,
  NoteName,
  NotesContext,
  Instrument,
  NoteId,
  NoteAudioMap,
  GridNotes,
  NoteState,
  InstrumentContext,
};
