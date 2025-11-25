import { createContext,  useState } from "react";
import type { ControlsPlayerContext } from "../types/types";

export const controlsPlayerContext =
  createContext<ControlsPlayerContext | null>(null);

export default function ControlsPlayerProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isLoop, setIsLoop] = useState(false);
  const [isPlay, setIsPlay] = useState<boolean>(false);
  return (
    <controlsPlayerContext.Provider value={{ isLoop, setIsLoop, isPlay, setIsPlay }}>
      {children}
    </controlsPlayerContext.Provider>
  );
}
