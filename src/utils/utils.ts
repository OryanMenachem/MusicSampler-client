import type {
  NoteName,
  NoteAudioMap,
  Instrument,
  ColumnCount,
  NoteState,
  Notes,
} from "../types/types";

const SERVER_URL = import.meta.env.VITE_SERVER_URL;

const noteAudioMap: NoteAudioMap = {
  PIANO: {
    DO: new Audio(`${SERVER_URL}PIANO/DO-6.mp3`),
    RE: new Audio(`${SERVER_URL}PIANO/RE-6.mp3`),
    MI: new Audio(`${SERVER_URL}PIANO/MI-6.mp3`),
    FA: new Audio(`${SERVER_URL}PIANO/FA-6.mp3`),
    SOL: new Audio(`${SERVER_URL}PIANO/SOL-6.mp3`),
    LA: new Audio(`${SERVER_URL}PIANO/LA-6.mp3`),
    TI: new Audio(`${SERVER_URL}PIANO/TI-6.mp3`),
  },
  SAXOPHONE: {},
  GUITAR: {
    DO: new Audio(`${SERVER_URL}GUITAR/DO-3.flac`),
    RE: new Audio(`${SERVER_URL}GUITAR/RE-3.flac`),
    MI: new Audio(`${SERVER_URL}GUITAR/MI-3.flac`),
    FA: new Audio(`${SERVER_URL}GUITAR/FA-3.flac`),
    SOL: new Audio(`${SERVER_URL}GUITAR/SOL-3.flac`),
    LA: new Audio(`${SERVER_URL}GUITAR/LA-3.flac`),
    TI: new Audio(`${SERVER_URL}GUITAR/TI-3.flac`),
  },
  KALIMBA: {
    DO: new Audio(`${SERVER_URL}KALIMBA/DO_03.wav`),
    RE: new Audio(`${SERVER_URL}KALIMBA/RE_03.wav`),
    MI: new Audio(`${SERVER_URL}KALIMBA/MI_03.wav`),
    FA: new Audio(`${SERVER_URL}KALIMBA/FA_03.wav`),
    SOL: new Audio(`${SERVER_URL}KALIMBA/SOL_03.wav`),
    LA: new Audio(`${SERVER_URL}KALIMBA/LA_03.wav`),
    TI: new Audio(`${SERVER_URL}KALIMBA/TI_03.wav`),
  },
};

function isInstrumentExists(instrument: Instrument): boolean {
  return Object.hasOwn(noteAudioMap, instrument);
}

function isNoteNameExists(instrument: Instrument, noteName: NoteName): boolean {
  return (
    isInstrumentExists(instrument) &&
    Object.hasOwn(noteAudioMap[instrument] ?? {}, noteName)
  );
}

function playAudio(instrument: Instrument, noteName: NoteName): void {
  if (!isNoteNameExists(instrument, noteName)) {
    throw Error("Note name does not exist in noteAudioMap");
  }
  const audio = noteAudioMap[instrument]![
    noteName
  ]!.cloneNode() as HTMLAudioElement;
  audio.play();
}

const NOTE_NAMES: NoteName[] = ["TI", "LA", "SOL", "FA", "MI", "RE", "DO"];
const INSTRUMENTS: Instrument[] = ["PIANO", "GUITAR", "KALIMBA"];

const sortNotesByColumn = (notes: Notes) => {
  return Object.values(notes).reduce((acc, note) => {
    (acc[note.columnCount] ||= []).push(note);
    return acc;
  }, {} as Record<ColumnCount, NoteState[]>);
};

export {
  noteAudioMap,
  NOTE_NAMES,
  isNoteNameExists,
  playAudio,
  INSTRUMENTS,
  sortNotesByColumn,
};
