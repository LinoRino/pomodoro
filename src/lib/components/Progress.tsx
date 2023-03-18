import { JSX } from "solid-js";

type EgmaSpin = {
  value: number;
  radius?: number;
  stroke?: number;
  withLabel?: boolean;
};

/**
 * a simple circle spiner
 * @param props
 */
export function Progress(props: EgmaSpin) {
  const rad = props.radius ? props.radius : 18;
  const stroke = props.stroke ? props.stroke : 5;
  const circum = rad * Math.PI;
  const size = 16 * 9;

  const dashArr = (which: 0 | 1) => {
    switch (which) {
      case 0:
        return rad * Math.PI * (props.value <= 50 ? props.value * 0.02 : 1);
      case 1:
        if (props.value <= 50) {
          return rad * Math.PI * 2;
        } else if (props.value > 100) {
          return 0;
        } else {
          return rad * Math.PI * (2 - props.value * 0.02);
        }
    }
  };
  return (
    <div class="progress grid place-items-center">
      <span class="absolute text-white text-lg font-semibold">
        {props.value}
      </span>
      <span
        class="progress-bar"
        role="progressbar"
        aria-valuenow={props.value}
        aria-valuemin="0"
        aria-valuemax="100"
      >
        <svg
          width={size}
          style={{
            position: "absolute",
            transform: "rotate(90deg)",
          }}
          height={size}
        >
          <circle
            cx={size / 2}
            cy={size / 2}
            r={rad}
            stroke-width={stroke}
            class="stroke-green-300 fill-transparent"
            stroke-dashoffset={-circum}
            stroke-dasharray={`${dashArr(0)} ${dashArr(1)}`}
          />
        </svg>
        <svg width={size} height={size}>
          <circle
            cx={size / 2}
            cy={size / 2}
            r={rad}
            stroke-width={stroke}
            class="stroke-white/80 fill-transparent"
          />
        </svg>
      </span>
    </div>
  );
}
