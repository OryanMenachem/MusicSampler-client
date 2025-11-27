import { useContext } from "react";
import { transportControlsContext } from "../../../contexts/context/TransportControls.context.tsx";
import type { TransportControlsContext } from "../../../types/types";
export default function MasterVolume() {
  const { dispatch, state } = useContext(
    transportControlsContext
  ) as TransportControlsContext;

  const volume = state.masterVolume * 100;

  const handleVolumeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = Number(event.target.value) / 100;
    dispatch({ type: "SET_MASTER_VOLUME", payload: newValue });
  };

  return (
    <input
      type="range"
      id="volume-control"
      min={0}
      max={100}
      value={volume}
      onChange={handleVolumeChange}
    />
  );
}
