"use client";
import { useRef, useState } from "react";
function VideoWithRef() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  if (isPlaying) {
    videoRef.current?.play();
  } else {
    videoRef.current?.pause();
  }
  return (
    <div className=" flex flex-col justify-center items-center p-3 rounded-lg border border-black">
      <button
        className="text-black font-bold text-3xl "
        onClick={() => setIsPlaying(!isPlaying)}
      >
        {isPlaying ? "Stop" : "Start"}
      </button>
      <video
        className="w-[300px] h-[400px]"
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        ref={videoRef}
        width="250"
      >
        <source
          src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
          type="video/mp4"
        />
      </video>
    </div>
  );
}
export default VideoWithRef;
