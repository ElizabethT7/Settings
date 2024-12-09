import {
  AudioPlayer,
  AudioPlayerProvider,
  PageHGroup,
  PageHGroupHeading,
  PageHGroupMain,
  Switch,
} from "@esfront/react";
import { Box, FormControlLabel } from "@mui/material";
import { useRef, useState } from "react";

export const Settings = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isAudioPlay, setIsAudioPlay] = useState(false);

  return (
    <PageHGroup>
      <PageHGroupHeading>Настройки</PageHGroupHeading>
      <PageHGroupMain>
        <Box display="flex" flexDirection="column">
          <FormControlLabel
            control={<Switch name="theme" />}
            label="Переключить тему"
          />
          <Box display="flex" flexWrap="wrap" columnGap="20px">
            <FormControlLabel
              control={
                <Switch
                  name="sound"
                  checked={isAudioPlay}
                  onChange={() => {
                    setIsAudioPlay(!isAudioPlay);
                  }}
                />
              }
              label="Проверить звук"
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

          <FormControlLabel
            control={<Switch name="reverse" />}
            label="Поменять настройки"
          />
        </Box>
      </PageHGroupMain>
    </PageHGroup>
  );
};
