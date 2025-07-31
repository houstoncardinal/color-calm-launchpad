"use client";

import { cn } from "@/lib/utils";
import { Home, BedDouble, DoorOpen, Flame, Stethoscope, ShieldCheck } from 'lucide-react';

interface TiltedScrollItem {
  id: string;
  text: string;
  icon?: any;
  color?: string;
  bgColor?: string;
  borderColor?: string;
}

interface TiltedScrollProps {
  items?: TiltedScrollItem[];
  className?: string;
}

const defaultItems: TiltedScrollItem[] = [
  { 
    id: "1", 
    text: "Residential Cleaning",
    icon: Home,
    color: "text-brandBlue",
    bgColor: "bg-brandBlue/10",
    borderColor: "border-brandBlue/20"
  },
  { 
    id: "2", 
    text: "Airbnb & Rental Cleaning",
    icon: BedDouble,
    color: "text-brandGreen",
    bgColor: "bg-brandGreen/10",
    borderColor: "border-brandGreen/20"
  },
  { 
    id: "3", 
    text: "Move-In/Move-Out Cleaning",
    icon: DoorOpen,
    color: "text-brandYellow",
    bgColor: "bg-brandYellow/10",
    borderColor: "border-brandYellow/20"
  },
  { 
    id: "4", 
    text: "Fire Restoration Cleaning",
    icon: Flame,
    color: "text-pink-500",
    bgColor: "bg-pink-100/30",
    borderColor: "border-pink-200/30"
  },
  { 
    id: "5", 
    text: "Medical & Healthcare Cleaning",
    icon: Stethoscope,
    color: "text-brandBlue",
    bgColor: "bg-brandBlue/10",
    borderColor: "border-brandBlue/20"
  },
  { 
    id: "6", 
    text: "Bloodborne Pathogen Certified",
    icon: ShieldCheck,
    color: "text-brandGreen",
    bgColor: "bg-brandGreen/10",
    borderColor: "border-brandGreen/20"
  }
];

export function TiltedScroll({ 
  items = defaultItems,
  className 
}: TiltedScrollProps) {
  return (
    <div className={cn("flex items-center justify-center", className)}>
      <div className="relative overflow-hidden [mask-composite:intersect] [mask-image:linear-gradient(to_right,transparent,black_5rem),linear-gradient(to_left,transparent,black_5rem),linear-gradient(to_bottom,transparent,black_5rem),linear-gradient(to_top,transparent,black_5rem)]">
        <div className="grid h-[400px] w-[350px] gap-5 animate-skew-scroll grid-cols-1">
          {items.map((item) => {
            const IconComponent = item.icon;
            return (
              <div
                key={item.id}
                className={cn(
                  "group flex items-center gap-3 cursor-pointer rounded-xl border-2 p-5 shadow-lg transition-all duration-300 ease-in-out hover:scale-105 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-xl",
                  item.bgColor || "bg-gradient-to-b from-background/80 to-muted/80",
                  item.borderColor || "border-border/40"
                )}
              >
                {IconComponent && (
                  <div className={cn(
                    "w-10 h-10 rounded-lg flex items-center justify-center border-2 shadow-md",
                    item.bgColor || "bg-muted/50",
                    item.borderColor || "border-border/40"
                  )}>
                    <IconComponent className={cn(
                      "h-5 w-5 drop-shadow-sm",
                      item.color || "stroke-foreground/60"
                    )} />
                  </div>
                )}
                <p className={cn(
                  "font-medium transition-colors",
                  item.color || "text-foreground/80",
                  "group-hover:text-foreground"
                )}>
                  {item.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}