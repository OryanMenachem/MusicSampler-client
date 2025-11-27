import TransportControlsLayout from "./buttons/transport-controls/TransportControls";
import ColumnControlsLayout from "./buttons/column-controls/ColumnControlsLayout";
import InstrumentSelectorBtn from "./buttons/instrument-selector/InstrumentSelectorBtn";
import "./buttons/button.style.css";

export default function PlayerControlsLayout(): React.JSX.Element {
  return (
    <div className="player-controls-layout">
      <TransportControlsLayout />
      <ColumnControlsLayout />
      <InstrumentSelectorBtn />
    </div>
  );
}
