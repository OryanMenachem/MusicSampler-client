import type { NoteName, NoteAudioMap, Instrument } from "../types/types";

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
    throw Error("Note name  dose not exists in noteAudioMap");
  }
  const audio = noteAudioMap[instrument]![
    noteName
  ]!.cloneNode() as HTMLAudioElement;
  audio.play();
}

const NoteNames: NoteName[] = ["TI", "LA", "SOL", "FA", "MI", "RE", "DO"];
export { noteAudioMap, NoteNames, isNoteNameExists, playAudio };
