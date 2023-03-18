import { Title } from "solid-start";
import Counter from "~/lib/components/Counter";
import { Progress } from "~/lib/components/Progress";
import { DataBase } from "~/lib/db";

export default function Home() {
  return (
    <main class="min-h-screen py-8 flex flex-col items-center">
      <div class="m-6">
        <Progress value={10} radius={16 * 3.75} stroke={12} />
      </div>
      <div class="flex m-3 justify-around items-center">
        <button
          title="Start pomodoro"
          class="bg-white mx-3 active:scale-95 h-10 w-10 text-emerald-500 p-2 rounded-xl text-md"
        >
          􀊄
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
