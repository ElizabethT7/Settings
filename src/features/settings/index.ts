import { useColorScheme } from "@mui/material";
import { useEffect, useState } from "react";

export const useSettings = () => {
  const { setMode, mode } = useColorScheme();
  const [isAudioPlay, setIsAudioPlay] = useState(false);
  const [isReverse, setIsReverse] = useState(false);

  const [settingsState, setSettingsState] = useState(new Map());

  const onSettingsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name;

    switch (name) {
      case "theme": {
        setMode(!!e.target.checked ? "dark" : "light");
        break;
      }
      case "sound": {
        setIsAudioPlay(!isAudioPlay);
        break;
      }
      case "reverse": {
        settingsState.clear();
        setIsAudioPlay(!isAudioPlay);
        setMode(mode === "light" ? "dark" : "light");
        (mode === "dark") === isAudioPlay
          ? setIsReverse(false)
          : setIsReverse(!isReverse);
        break;
      }
    }

    if (!e.target.checked) {
      settingsState.delete(name);
      return;
    }

    switch (settingsState.size) {
      case 0: {
        settingsState.set(name, 1);
        break;
      }
      case 1: {
        settingsState.set(name, settingsState.size + 1);
        break;
      }
      default: {
        settingsState.forEach((value, key) => {
          if (value === 1) {
            settingsState.delete(key);
          } else {
            settingsState.set(key, value - 1);
          }
        });
        settingsState.set(name, settingsState.size + 1);
      }
    }

    setSettingsState(settingsState);

    if (settingsState.size > 1) {
      !settingsState.has("sound") && setIsAudioPlay(false);
      !settingsState.has("theme") && setMode("light");
      !settingsState.has("reverse") && setIsReverse(false);
    }
  };

  useEffect(() => {
    if (mode === "dark") {
      settingsState.set("theme", 1);
      setSettingsState(settingsState);
    }
  }, []);

  return {
    mode,
    isAudioPlay,
    isReverse,
    onSettingsChange,
  };
};
