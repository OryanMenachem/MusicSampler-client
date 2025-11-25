import { useState } from "react";
import { useGetContext } from "../../../hooks/";
import type { InstrumentContext } from "../../../types/types";
import { INSTRUMENTS } from "../../../utils/utils";

export default function InstrumentSelectorBtn(): React.JSX.Element {
  const [currentInstrument, setCurrentInstrument] = useState<number>(0);
  const { instrument, setInstrument } = useGetContext(
    "instrumentContext"
  ) as InstrumentContext;
  const instrumentSelectorClassName = `btn instrument-selector--btn ${instrument}`;
  const handleClick = () => {
    setCurrentInstrument((prev) => prev + 1);
    setInstrument((prev) => (prev = INSTRUMENTS[currentInstrument]));
    if (currentInstrument + 1 === INSTRUMENTS.length) {
      setCurrentInstrument((prev) => (prev = 0));
    }
  };
  return (
    <button
      className={instrumentSelectorClassName}
      onClick={handleClick}
    ></button>
  );
}
