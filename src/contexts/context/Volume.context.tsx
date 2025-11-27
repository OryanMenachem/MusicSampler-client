import { createContext, useState } from "react";
import type { VolumeContext } from "../../types/types";

export const volumeContext = createContext<VolumeContext | null>(null);

export default function VolumeProvider({
  children,
}: {  
  children: React.ReactNode;
}) {
  const [volume, setVolume] = useState(1);

  return (
    <volumeContext.Provider value={{ volume, setVolume }}>
      {children}
    </volumeContext.Provider>
  );
}
