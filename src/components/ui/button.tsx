import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ocean-trust focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-ocean-trust text-pure-clean hover:bg-forest-calm hover:shadow-soft transform hover:scale-105",
        luxury: "bg-gradient-trust text-pure-clean hover:shadow-luxury transform hover:scale-105 font-medium",
        calm: "bg-sage-harmony text-text-primary hover:bg-forest-calm hover:shadow-soft transform hover:scale-105",
        ghost: "bg-serenity-blue/20 text-ocean-trust hover:bg-serenity-blue/40 hover:shadow-soft",
        outline: "border-2 border-ocean-trust bg-transparent text-ocean-trust hover:bg-ocean-trust hover:text-pure-clean hover:shadow-soft",
        secondary: "bg-warm-embrace text-text-primary hover:bg-sage-harmony hover:shadow-soft",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        link: "text-ocean-trust underline-offset-4 hover:underline hover:text-forest-calm",
      },
      size: {
        default: "h-12 px-6 py-3",
        sm: "h-10 rounded-lg px-4",
        lg: "h-14 rounded-xl px-10 text-base",
        xl: "h-16 rounded-2xl px-12 text-lg font-medium",
        icon: "h-12 w-12",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
