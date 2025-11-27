import { PlayToggleBtn, LoopToggleBtn, RestartBtn, ResetBtn ,  MasterVolume} from "./index";

export default function TransportControlsLayout(): React.JSX.Element {
  return (
    <div className="transport-controls-layout">
      <PlayToggleBtn />
      <LoopToggleBtn />
      <RestartBtn />
      <ResetBtn />
      <MasterVolume />
    </div>
  );
}
