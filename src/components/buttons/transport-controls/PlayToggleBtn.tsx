import type { TransportControlsContext } from "../../../contexts/context/TransportControls.context";
import { useGetContext, usePlayer } from "../../../hooks";


export default function PlayToggleBtn(): React.JSX.Element {
  const { state, dispatch } = useGetContext(
    "transportControlsContext"
  ) as TransportControlsContext;
  usePlayer();
  const className = `btn play-toggle--btn ${state.isPlaying ? "stop" : "play"}`;
  const handleClick = () => {
    dispatch({ type: "TOGGLE_PLAY" });
  };
  return <button className={className} onClick={handleClick}></button>;
}
