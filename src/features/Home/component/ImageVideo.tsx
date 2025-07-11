import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Play, Pause } from "lucide-react";
import { BANNER, TECHFEST_WELCOME_VIDEO } from "../../../assets";

export const ImageVideo = () => {
  const [playVideo, setPlayVideo] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  // When playVideo becomes true, play the video
  useEffect(() => {
    if (playVideo && videoRef.current) {
      const playPromise = videoRef.current.play();
      // Some browsers may block autoplay
      if (playPromise !== undefined) {
        playPromise.catch((error) => {
          console.error("Autoplay was prevented:", error);
        });
      }
    }
  }, [playVideo]);

  const handleToggle = () => {
    if (playVideo) {
      videoRef.current?.pause();
      setPlayVideo(false);
    } else {
      setPlayVideo(true);
    }
  };

  const handlePause = () => {
    setPlayVideo(false);
  };

  return (
    <div className="space-y-8">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="relative group"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500" />

        <div className="relative overflow-hidden rounded-3xl border border-white/50 backdrop-blur-sm shadow-2xl">
          {playVideo ? (
            <video
              ref={videoRef}
              src={TECHFEST_WELCOME_VIDEO}
              className="w-full h-96 object-cover object-top rounded-3xl"
              onPause={handlePause}
            />
          ) : (
            <>
              <img
                src={BANNER}
                className="w-full h-96 object-cover object-top group-hover:scale-105 transition-transform duration-500"
                alt="Ocean Academy Students"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </>
          )}

          {/* Center Toggle Button */}
          <div
            onClick={handleToggle}
            className="absolute top-2 right-2 bg-white/90 backdrop-blur-sm rounded-full p-4 shadow-lg cursor-pointer hover:scale-110 transition-transform z-10"
          >
            {playVideo ? (
              <Pause className="w-6 h-6 text-blue-600" />
            ) : (
              <Play className="w-6 h-6 text-blue-600" />
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
};
