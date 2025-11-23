import { noteSrc } from "../../utils/utils";
import type { Instruments, MusicalNotes } from "../../types/types";

function getNoteSrc(instruments: Instruments, musicalNotes: MusicalNotes) {
    return noteSrc[instruments!]![musicalNotes]?.toString()
      ? noteSrc[instruments!]![musicalNotes]?.toString()
      : new URL(`${import.meta.env.VITE_SERVER_URL}default.wav`).toString();

}

export { getNoteSrc };
