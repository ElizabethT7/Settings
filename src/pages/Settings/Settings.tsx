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
          <SettingsControl
            name="theme"
            checked={!!state.theme}
            label="Переключить тему"
            onChange={onSettingsChange}
          />

          <Box display="flex" flexWrap="wrap" columnGap="20px">
            <SettingsControl
              name="sound"
              checked={isAudioPlay}
              label="Проверить звук"
              onChange={onSettingsChange}
            />
            {isAudioPlay && (
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

          <SettingsControl
            name="reverse"
            checked={!!state.reverse}
            label="Поменять настройки"
            onChange={onSettingsChange}
          />
        </Box>
      </PageHGroupMain>
    </PageHGroup>
  );
};
