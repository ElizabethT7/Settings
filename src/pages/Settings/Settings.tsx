import {
  AudioPlayer,
  AudioPlayerProvider,
  PageHGroup,
  PageHGroupHeading,
  PageHGroupMain,
  useUpdateEffect,
} from "@esfront/react";
import { Box } from "@mui/material";
import { useRef } from "react";
import { useSettings } from "../../features/settings/settings";
import { SettingsControl } from "./ui";

const settingsControl = [{
  name: "theme",
  label: "Переключить тему"
},
{
  name: "sound",
  label: "Проверить звук"
},
{  name: "reverse",
  label: "Поменять настройки"
},]

export const Settings = () => {
  const audioRef = useRef<HTMLAudioElement>(null);

  const { isAudioPlay,  onSettingsChange, state } = useSettings();

  useUpdateEffect(() => {
    if (audioRef.current && !!isAudioPlay && audioRef.current.paused) {
      audioRef.current.addEventListener("loadeddata", () => {
        audioRef.current?.play();
      });
    }
  });

  return (
    <PageHGroup>
      <PageHGroupHeading>Настройки</PageHGroupHeading>
      <PageHGroupMain>
        <Box display="flex" flexDirection="column">
          {settingsControl.map(({name, label}) => (
            <Box key={name} display="flex" flexWrap="wrap" columnGap="20px">
              <SettingsControl
                name={name}
                checked={!!state[name]}
                label={label}
                onChange={onSettingsChange}
              />
              {name === "sound" && !!state[name] && (
                <AudioPlayerProvider>
                  <AudioPlayer
                    audioRef={audioRef}
                    loop
                    sx={{ minWidth: "240px" }}
                    src="https://www.fesliyanstudios.com/musicfiles/2019-06-12_-_Homework_-_David_Fesliyan.mp3"
                  />
                </AudioPlayerProvider>
              )}
          </Box>
          ))}
        </Box>
      </PageHGroupMain>
    </PageHGroup>
  );
};
