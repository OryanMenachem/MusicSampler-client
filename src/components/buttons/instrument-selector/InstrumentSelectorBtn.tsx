import { useState, useEffect } from "react";
import { useGetContext } from "../../../hooks/";
import type { InstrumentContext } from "../../../types/types";
import { INSTRUMENTS } from "../../../utils/utils";
import type { TransportControlsContext } from "../../../contexts/context/TransportControls.context";

export default function InstrumentSelectorBtn(): React.JSX.Element {
  const [currentInstrument, setCurrentInstrument] = useState<number>(0);
  const { instrument, setInstrument } = useGetContext(
    "instrumentContext"
  ) as InstrumentContext;
  const { state } = useGetContext(
    "transportControlsContext"
  ) as TransportControlsContext;

  const instrumentSelectorClassName = `btn instrument-selector--btn ${instrument}`;

  const handleClick = () => {
    !state.isPlaying &&
      setCurrentInstrument((prev) => (prev + 1) % INSTRUMENTS.length);
  };

  useEffect(() => {
    setInstrument(INSTRUMENTS[currentInstrument]);
  }, [currentInstrument]);

  return (
    <button
      className={instrumentSelectorClassName}
      onClick={handleClick}
    ></button>
  );
}
