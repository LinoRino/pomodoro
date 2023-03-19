import { createEffect, createSignal } from "solid-js";
import { Progress } from "~/lib/components/Progress";
import { createTimer } from "~/lib/hooks/createTimer";

export default function Home() {
  const [time, setTime] = createTimer(0, 2);
  const [start, setStart] = createSignal(false);
  const [IID, setIID] = createSignal(0);

  createEffect(() => {
    if (start()) {
      setIID(
        window.setInterval(() => {
          if (time() > 0) setTime(time() - 1);
          else {
            setStart(false);
            new Notification("Finished!", { body: "hello wolrd" });
          }
        }, 1000)
      );
    } else {
      window.clearInterval(IID());
    }
  });
  return (
    <main class="min-h-screen py-8 flex flex-col items-center">
      <div class="m-6">
        <Progress
          withLabel
          max={time()}
          min={0}
          value={time()}
          radius={16 * 3.75}
          stroke={12}
          label={`${time("m") < 10 ? 0 : ""}${time("m")}:${
            time("s") < 10 ? 0 : ""
          }${time("s")}`}
        />
      </div>
      <div class="flex m-3 justify-around items-center">
        <button
          title={start() ? "start pomodoro" : "stop pomodoro"}
          onClick={() => {
            if (time() > 0) setStart((now) => !now);
          }}
          class="bg-white mx-3 active:scale-95 h-10 w-10 text-emerald-500 p-2 rounded-xl text-md"
        >
          {start() ? "􀊆" : "􀊄"}
        </button>
        <button
          title="Skip"
          class="bg-white mx-3 active:scale-95 h-10 w-10 text-emerald-500 p-2 rounded-xl text-md"
        >
          􀊐
        </button>
      </div>
    </main>
  );
}
