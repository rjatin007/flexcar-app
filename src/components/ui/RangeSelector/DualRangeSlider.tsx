// "use client";

// import { forwardRef, Fragment } from "react";
// import type { ComponentRef, ComponentProps } from "react";
import * as Slider from "@radix-ui/react-slider";

// import clsx from "clsx";

// interface DualRangeSliderProps
//   extends ComponentProps<typeof SliderPrimitive.Root> {
//   labelPosition?: "top" | "bottom";
//   label?: (value: number | undefined) => React.ReactNode;
// }

// const DualRangeSlider = forwardRef<
//   ComponentRef<typeof SliderPrimitive.Root>,
//   DualRangeSliderProps
// >(({ className, label, labelPosition = "top", ...props }, ref) => {
//   const initialValue = Array.isArray(props.value)
//     ? props.value
//     : [props.min, props.max];

//   return (
//     <SliderPrimitive.Root
//       ref={ref}
//       className={clsx(
//         "relative flex w-full touch-none select-none items-center",
//         className
//       )}
//       {...props}
//     >
//       <SliderPrimitive.Track className="relative h-2 w-full grow overflow-hidden rounded-full bg-black">
//         <SliderPrimitive.Range className="absolute h-full bg-primary" />
//       </SliderPrimitive.Track>
//       {/* {initialValue.map((value, index) => (
//         <Fragment key={index}>
//           <SliderPrimitive.Thumb className="relative block h-4 w-4 rounded-full border-2 border-primary bg-background ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50">
//             {label && (
//               <span
//                 className={clsx(
//                   "absolute flex w-full justify-center",
//                   labelPosition === "top" && "-top-7",
//                   labelPosition === "bottom" && "top-4"
//                 )}
//               >
//                 {label(value)}
//               </span>
//             )}
//           </SliderPrimitive.Thumb>
//         </Fragment>
//       ))} */}
//     </SliderPrimitive.Root>
//   );
// });
// DualRangeSlider.displayName = "DualRangeSlider";

// export default DualRangeSlider;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function DualRangeSlider(props: any) {
  return (
    <Slider.Root
      className="relative flex h-5  touch-none select-none items-center w-full"
      defaultValue={[0, 1000]}
      step={0.1}
      max={1000}
      minStepsBetweenThumbs={1}
    >
      <Slider.Track className="relative h-1 grow rounded-full bg-slate-100">
        <Slider.Range className="absolute h-full rounded-full bg-black" />
      </Slider.Track>
      <Slider.Thumb
        className="relative block size-5 rounded-[10px] bg-white border-1 border-solid border-black focus:border-black hover:border-black active:border-black outline-none"
        aria-label="Volume"
      />
      <span className="absolute -bottom-6 ">10</span>
      <Slider.Thumb
        className="relative block size-5 rounded-[10px] bg-white border-1 border-solid border-black focus:border-black hover:border-black active:border-black outline-none"
        aria-label="Volume"
      />
      <span className="absolute -bottom-6 right-0 ">10</span>
    </Slider.Root>
  );
}
