import type { NoteSrc} from "../types/types";

const noteSrc: NoteSrc = {
  PIANO: {
    DO: new URL(`${import.meta.env.VITE_SERVER_URL}PIANO/DO-6.mp3`),
    RE: new URL(`${import.meta.env.VITE_SERVER_URL}PIANO/RE-6.mp3`),
    MI: new URL(`${import.meta.env.VITE_SERVER_URL}PIANO/MI-6.mp3`),
    FA: new URL(`${import.meta.env.VITE_SERVER_URL}PIANO/FA-6.mp3`),
    SOL: new URL(`${import.meta.env.VITE_SERVER_URL}PIANO/SOL-6.mp3`),
    LA: new URL(`${import.meta.env.VITE_SERVER_URL}PIANO/LA-6.mp3`),
    TI: new URL(`${import.meta.env.VITE_SERVER_URL}PIANO/TI-6.mp3`),
  },
};

export { noteSrc  };
