import React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "@/lib/utils";

interface RainbowButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
  variant?: "default" | "black" | "step";
}

export function RainbowButton({
  children,
  className,
  asChild = false,
  variant = "default",
  ...props
}: RainbowButtonProps) {
  const Comp = asChild ? Slot : "button";
  
  const backgroundClasses = variant === "black" 
    ? "bg-black"
    : variant === "step"
    ? "bg-white"
    : "bg-white";
  
  const textClasses = variant === "black" ? "text-white" : "text-gray-900";
  
  return (
    <Comp
      className={cn(
        "group relative inline-flex h-11 cursor-pointer items-center justify-center rounded-xl border-0 px-8 py-2 font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",

        // before styles - rainbow glow around the button
        "before:absolute before:inset-[-2px] before:z-[-1] before:rounded-xl before:animate-rainbow before:bg-[linear-gradient(90deg,hsl(var(--color-1)),hsl(var(--color-5)),hsl(var(--color-3)),hsl(var(--color-4)),hsl(var(--color-2)))] before:bg-[length:200%] before:[filter:blur(calc(0.4*1rem))] before:opacity-60",

        // background and text colors based on variant
        backgroundClasses,
        textClasses,

        className,
      )}
      {...props}
    >
      {children}
    </Comp>
  );
}
