import ReactAudioPlayer from "react-audio-player";
import { useWord } from "../../contexts/word";
import { AudioContainer } from "./styles";

export function Audio() {
  const { audio } = useWord();

  return (
    <AudioContainer>
      <ReactAudioPlayer
        src={audio}
        autoPlay
        controls
        className={`player ${audio ? "active" : "inactive"}`}
      />
      {!audio && <p>We don't have the sound of that word. 😥 </p>}
    </AudioContainer>
  );
}
