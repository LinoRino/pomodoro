import { createSignal } from "solid-js";

type Time = "s" | "m" | "h";
type TimeAccessor = (option?: Time) => number;
type TimeSetter = (value: number, option?: Time) => void;
type TimeSignal = [get: TimeAccessor, set: TimeSetter];

export function createTimer(s: number, m?: number, h?: number): TimeSignal {
  const min = m ? m * 60 : 0;
  const hour = h ? h * 60 * 60 : 0;

  const [time, setTime] = createSignal(s + min + hour);
  const setter: TimeSetter = (value, option) => {
    switch (option) {
      case "s":
        setTime((now) => now + value);
        break;
      case "m":
        setTime((now) => now + value * 60);
        break;
      case "h":
        setTime((now) => now + value * 60 * 60);
        break;
      default:
        setTime(value);
        break;
    }
  };
  const getter: TimeAccessor = (option?: Time) => {
    switch (option) {
      case "s":
        return time() > 60 ? time() % 60 : time();
      case "m":
        return Math.floor(time() / 60);
      case "h":
        return Math.floor(time() / 60) / 60;
      default:
        return time();
    }
  };
  return [getter, setter];
}
