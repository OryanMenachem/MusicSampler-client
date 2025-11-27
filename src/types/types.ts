import type { Dispatch, SetStateAction } from "react";
import type { TransportControlsContext } from "../contexts/context/TransportControls.context";

type NoteName = "DO" | "RE" | "MI" | "FA" | "SOL" | "LA" | "TI";

type Instrument = "PIANO" | "SAXOPHONE" | "GUITAR" | "KALIMBA";

type NoteAudioMap = Partial<
  Record<Instrument, Partial<Record<NoteName, HTMLAudioElement>>>
>;

type IsNoteOn = boolean;
type ColumnCount = number;
type NoteId = string;
type Notes = Record<NoteId, NoteState>;
type IsActive = boolean;
type SetColumnCount = Dispatch<SetStateAction<ColumnCount>>;
type CurrentColumn = number;
// type SetCurrentColumn = Dispatch<SetStateAction<CurrentColumn>>;

type NoteProps = {
  noteId: NoteId;
  isActive?: IsActive;
} & NoteState;

interface NoteState {
  isNoteOn?: IsNoteOn;
  instrument: Instrument;
  noteName: NoteName;
  columnCount: ColumnCount;
}

type Restart = boolean;
type SetRestart = Dispatch<SetStateAction<Restart>>;

interface RestartContext {
  restart: Restart;
  setRestart: SetRestart;
}

interface NotesContext {
  notes: Notes;
  setNotes: Dispatch<SetStateAction<Notes>>;
  toggleIsOn: (noteId: NoteId) => void;
}
interface ColumnsContext {
  columnCount: ColumnCount;
  setColumnCount: SetColumnCount;
}
interface InstrumentContext {
  instrument: Instrument;
  setInstrument: Dispatch<SetStateAction<Instrument>>;
}

type IsLoop = boolean;
type SetIsLoop = Dispatch<SetStateAction<boolean>>;
type IsPlaying = boolean;
type SetIsPlaying = Dispatch<SetStateAction<boolean>>;

interface ControlsPlayerContext {
  isLoop: IsLoop;
  setIsLoop: SetIsLoop;
  isPlaying: IsPlaying;
  setIsPlaying: SetIsPlaying;
}
type ActiveColumnIndex = number | null;
type SetActiveColumnIndex = Dispatch<SetStateAction<ActiveColumnIndex | null>>;

interface ActiveColumnContext {
  activeColumnIndex: ActiveColumnIndex;
  setActiveColumnIndex: SetActiveColumnIndex;
}

interface HandleRemoveColumnArgs {
  notes: Notes;
  setNotes: Dispatch<SetStateAction<Notes>>;
  columns: ColumnCount;
  setColumns: Dispatch<SetStateAction<ColumnCount>>;
}

interface UsePlayerProps {
  notes?: Notes;
  isLooping?: IsLoop;
  isPlaying?: IsPlaying;
}

type ContextName =
  | "instrumentContext"
  | "columnCountContext"
  | "notesContext"
  | "transportControlsContext";

type Contexs =
  | NotesContext
  | ColumnsContext
  | InstrumentContext
  | TransportControlsContext;

type Volume = number;
type SetVolume = Dispatch<SetStateAction<Volume>>;
interface VolumeContext {
  volume: Volume;
  setVolume: SetVolume;
}

interface ProviderProps {
  children: React.ReactNode;
}
export type {
  RestartContext,
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
  ColumnCount,
  ContextName,
  Contexs,
  ControlsPlayerContext,
  UsePlayerProps,
  ActiveColumnContext,
  ActiveColumnIndex,
  VolumeContext,
  ProviderProps,
};
