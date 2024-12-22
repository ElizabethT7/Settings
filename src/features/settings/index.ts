import { useUpdateEffect } from "@esfront/react";
import { useColorScheme } from "@mui/material";
import { useState } from "react";

export const useSettings = () => {
  const { setMode, mode } = useColorScheme();

  const [state, setState] = useState ({
    theme: mode === "dark"? 1 : 0,
    sound: 0,
    reverse : 0
  }

  )

  const onSettingsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name;
      const changedState  = {...state}
    if (!e.target.checked) {

      changedState[name as keyof typeof state] = 0;
      setState(changedState);
      return;
    }

    changedState[name as keyof typeof state] = 1;
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
