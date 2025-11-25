import PlayToggleBtn from "./PlayToggleBtn";
import LoopToggleBtn from "./LoopToggleBtn";
import RestartBtn from "./RestartBtn";
import ResetBtn from "./ResetBtn";

export default function TransportControls(): React.JSX.Element {
  return (
    <div className="transport-controls">
      <PlayToggleBtn />
      <LoopToggleBtn />
      <RestartBtn />
      <ResetBtn />
    </div>
  );
}
