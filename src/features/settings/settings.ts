import { useUpdateEffect } from "@esfront/react";
import { useColorScheme } from "@mui/material";
import { useState } from "react";
import { setSettingsState } from "./settings.utils";

export const useSettings = () => {
  const { setMode, mode } = useColorScheme();

  const [state, setState] = useState({
    theme: mode === "dark"? 1 : 0,
    sound: 0,
    reverse : 0
  })

  const onSettingsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const changedState = setSettingsState(e, state);
    setState(changedState);
  };

  useUpdateEffect(() => {
    setMode(!!state.theme ? "dark" : "light" );
  }, [state.theme])

  return {
    mode,
    isAudioPlay: !!state.sound,
    state,
    onSettingsChange,
  };
};
