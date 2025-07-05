import { Btn_sound } from "../assets";

// utils/vibrate.ts
export const vibrateDevice = (pattern: number | number[] = 200) => {
  if ("vibrate" in navigator) {
    console.log("vibrate")
    navigator.vibrate(pattern);
  } else {
    console.warn("Vibration API not supported on this device");
  }
};

export const soundBtn = () => {
  const audio = new Audio(Btn_sound);
  audio.volume = 0.6;
  audio.play().catch((err) => {
    console.warn("Click sound failed", err);
  });
}

export const btnInteraction = () => {
  vibrateDevice(10);
  soundBtn();
}