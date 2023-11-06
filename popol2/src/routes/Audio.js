import React from "react";
import AudioPlayer from "react-modern-audio-player";
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";
import DownloadIcon from "@mui/icons-material/Download";

const CustomAudioPlayer = ({ playList }) => {
  return (
    <AudioPlayer
      playList={playList}
      activeUI={{
        playButton: true,
        playList: false,
        prevNnext: false,
        volume: true,
        volumeSlider: false,
        repeatType: true,
        trackTime: true,
        trackInfo: true,
        artwork: true,
        progress: "bar",
      }}
      placement={{
        interface: {
          templateArea: {
            artwork: "row1-1",
            trackInfo: "row1-2",
            playButton: "row1-3",
            trackTimeCurrent: "row1-4",
            trackTimeDuration: "row1-5",
            progress: "row1-6",
            repeatType: "row1-7",
            volume: "row1-8",
          },
        },
        player: "bottom",
      }}
    >
      <button>
        <DownloadIcon />
      </button>
      <button>
        <PlaylistAddIcon />
      </button>
    </AudioPlayer>
  );
};

export default CustomAudioPlayer;
