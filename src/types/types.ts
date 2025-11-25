import type { Dispatch, SetStateAction } from "react";

type NoteName = "DO" | "RE" | "MI" | "FA" | "SOL" | "LA" | "TI";

type Instrument = "PIANO" | "SAXOPHONE";

type NoteAudioMap = Partial<
  Record<Instrument, Partial<Record<NoteName, HTMLAudioElement>>>
>;

type IsNoteOn = boolean;
type Column = number;
type NoteId = string;
type Notes = Record<NoteId, NoteState>;
type ActiveColumn = "activeColumn";

type NoteProps = {
  noteId: NoteId;
} & NoteState;

interface NoteState {
  isNoteOn?: IsNoteOn;
  instrument: Instrument;
  noteName: NoteName;
  column: Column;
}
interface NotesContext {
  notes: Notes;
  setNotes: Dispatch<SetStateAction<Notes>>;
  toggleIsOn: (noteId: NoteId) => void;
}
interface ColumnsContext {
  columns: Column;
  setColumns: Dispatch<SetStateAction<Column>>;
}
interface InstrumentContext {
  instrument: Instrument;
  setInstrument: Dispatch<SetStateAction<Instrument>>;
}

interface HandleRemoveColumnArgs {
  notes: Notes;
  setNotes: Dispatch<SetStateAction<Notes>>;
  columns: Column;
  setColumns: Dispatch<SetStateAction<Column>>;
}

interface HandlePlayToggleArgs {
  notes: Notes;
  abortedRef: React.RefObject<{
    aborted: boolean;
  }>;
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
  ColumnsContext,
  HandleRemoveColumnArgs,
  Column,
  HandlePlayToggleArgs,
};
