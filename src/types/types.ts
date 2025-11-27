import type { Dispatch, SetStateAction } from "react";

// --- Column  types  --- //
interface ColumnCountContext {
  columnCount: ColumnCount;
  setColumnCount: SetColumnCount;
}

type ColumnCount = number;
type SetColumnCount = React.Dispatch<React.SetStateAction<ColumnCount>>;

// --- Column  types---- //

// --- Transport Controls types  --- //
type IsPlaying = boolean;
type IsLooping = boolean;
type Restart = boolean;
type TempoBPM = number;
type MasterVolume = number;
type CurrentPlayingColumnIndex = number;
export interface TransportControlsState {
  isPlaying: IsPlaying;
  isLooping: IsLooping;
  restart: Restart;
  tempoBPM: TempoBPM;
  masterVolume: MasterVolume;
  currentPlayingColumnIndex: CurrentPlayingColumnIndex;
}
export interface TransportControlsContext {
  state: TransportControlsState;
  dispatch: React.Dispatch<any>;
}
// export type TransportControlsAction =
//   | { type: "TOGGLE_PLAY" }
//   | { type: "TOGGLE_LOOP" }
//   | { type: "RESTART" }
//   | { type: "RESET" };

export interface TransportControlsReducerArgs {
  state: TransportControlsState;
  action: Dispatch<any>;
}  

// --- Transport Controls types ---- //

type NoteName = "DO" | "RE" | "MI" | "FA" | "SOL" | "LA" | "TI";

type Instrument = "PIANO" | "SAXOPHONE" | "GUITAR" | "KALIMBA";

type NoteAudioMap = Partial<
  Record<Instrument, Partial<Record<NoteName, HTMLAudioElement>>>
>;

type IsNoteOn = boolean;
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
  columnCount: ColumnCount;
}

interface NotesContext {
  notes: Notes;
  setNotes: Dispatch<SetStateAction<Notes>>;
  toggleIsOn: (noteId: NoteId) => void;
}
interface InstrumentSelectorContext {
  instrument: Instrument;
  dispatch: React.Dispatch<any>;
}

type ActiveColumnIndex = number | null;

interface HandleRemoveColumnArgs {
  notes: Notes;
  setNotes: Dispatch<SetStateAction<Notes>>;
  columnCount: ColumnCount;
  setColumnCount: SetColumnCount;
}

type ContextName =
  | "instrumentSelectorContext"
  | "columnCountContext"
  | "notesContext"
  | "transportControlsContext";

type Contexs =
  | NotesContext
  | ColumnCountContext
  | InstrumentSelectorContext
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
  NoteProps,
  Notes,
  NoteName,
  NotesContext,
  Instrument,
  NoteId,
  NoteAudioMap,
  NoteState,
  InstrumentSelectorContext,
  ColumnCountContext,
  HandleRemoveColumnArgs,
  ColumnCount,
  ContextName,
  Contexs,
  ActiveColumnIndex,
  VolumeContext,
  ProviderProps,
};
