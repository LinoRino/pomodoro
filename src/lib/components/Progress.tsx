import { JSX } from "solid-js";

type EgmaSpin = {
  value: number;
  /**
   * max value
   * @default 100
   */
  max?: number;
  /**
   * min value
   * @default 0
   */
  min?: number;
  radius?: number;
  stroke?: number;
  withLabel?: boolean;
  label?: JSX.Element;
};

/**
 * A simple spinner
 * @param props props
 * @returns {JSX.Element}
 */
export function Progress(props: EgmaSpin): JSX.Element {
  const max = props.max ? props.max : props.value <= 100 ? 100 : props.value;
  const min = props.min ? props.min : props.value >= 0 ? 0 : props.value;
  const rad = props.radius ? props.radius : 18;
  const stroke = props.stroke ? props.stroke : 5;
  const circum = rad * Math.PI;
  const size = 16 * 9;

  const dashArr = (which: 0 | 1) => {
    switch (which) {
      case 0:
        return circum * 2 * (props.value <= max / 2 ? props.value / max : 2);
      case 1:
        if (props.value <= max / 2) {
          return circum * 2;
        } else if (props.value > max) {
          return 0;
        } else {
          return circum * 2 * (1 - props.value / max);
        }
    }
  };
  if (props.max && props.min && props.max <= props.min) {
    throw new Error("max should be greater than min");
  }
  return (
    <div class="progress grid place-items-center">
      {props.withLabel && (
        <span class="absolute text-white text-lg font-semibold">
          {props.label ? props.label : props.value}
        </span>
      )}
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
