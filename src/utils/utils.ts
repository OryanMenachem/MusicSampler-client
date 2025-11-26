import type {
  NoteName,
  NoteAudioMap,
  Instrument,
  Column,
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
const INSTRUMENTS: Instrument[] = ["PIANO", "SAXOPHONE"];

const sortNotesByColumn = (notes: Notes) => {
  return Object.values(notes).reduce((acc, note) => {
    (acc[note.columnCount] ||= []).push(note);
    return acc;
  }, {} as Record<Column, NoteState[]>);
};

export {
  noteAudioMap,
  NOTE_NAMES,
  isNoteNameExists,
  playAudio,
  INSTRUMENTS,
  sortNotesByColumn,
};
