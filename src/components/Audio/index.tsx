import ReactAudioPlayer from "react-audio-player";
import { AudioContainer } from "./styles";

export function Audio() {
  return (
    <AudioContainer>
      <ReactAudioPlayer
        src="https://api.dictionaryapi.dev/media/pronunciations/en/hello-au.mp3"
        autoPlay
        controls
      />
    </AudioContainer>
  );
}
