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
type IsActive = boolean;
type NoteProps = {
  noteId: NoteId;
  isActive?: IsActive;
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

type IsLoop = boolean;
type SetIsLoop = Dispatch<SetStateAction<boolean>>;
type IsPlay = boolean;
type SetIsPlay = Dispatch<SetStateAction<boolean>>;

interface ControlsPlayerContext {
  isLoop: IsLoop;
  setIsLoop: SetIsLoop;
  isPlay: IsPlay;
  setIsPlay: SetIsPlay;
}
type ActiveColumn = number | null;
type SetActiveColumn = Dispatch<SetStateAction<ActiveColumn | null>>;

interface ActiveColumnContext {
  activeColumn: ActiveColumn;
  setActiveColumn: SetActiveColumn;
}

interface HandleRemoveColumnArgs {
  notes: Notes;
  setNotes: Dispatch<SetStateAction<Notes>>;
  columns: Column;
  setColumns: Dispatch<SetStateAction<Column>>;
}

interface UsePlayerProps {
  notes: Notes;
  isLoop?: IsLoop;
  isPlay: IsPlay;
}

type ContextName =
  | "instrumentContext"
  | "columnsContext"
  | "notesContext"
  | "controlsPlayerContext"
  | "activeColumnContext";

type Contexs =
  | NotesContext
  | ColumnsContext
  | InstrumentContext
  | ControlsPlayerContext
  | ActiveColumnContext;

export type {
  NoteProps,
  Notes,
  NoteName,
  NotesContext,
  Instrument,
  NoteId,
  NoteAudioMap,
  NoteState,
  InstrumentContext,
  ColumnsContext,
  HandleRemoveColumnArgs,
  Column,
  ContextName,
  Contexs,
  ControlsPlayerContext,
  UsePlayerProps,
  ActiveColumnContext,
  ActiveColumn,
};
