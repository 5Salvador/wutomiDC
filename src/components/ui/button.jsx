import React from "react";
import { cva } from "class-variance-authority";
import { cn } from "../../utils/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 font-body",
  {
    variants: {
      variant: {
        default: "bg-primary text-white hover:bg-secondary/80 shadow-2xl duration-300",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border-2 border-primary bg-secondary hover:bg-primary hover:text-primary-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "bg-secondary text-white hover:bg-secondary/80 hover:text-white",
        link: "text-primary underline-offset-4 hover:underline",
        gold: "bg-gold-primary text-white hover:bg-gold-highlight shadow-soft hover:shadow-card font-semibold",
        hero: "bg-primary-foreground/10 backdrop-blur-sm text-primary-foreground border border-primary-foreground/30 hover:bg-gold-deep hover:border-primary-foreground/50",
        heroGold: "bg-accent text-accent-foreground hover:bg-gold-light shadow-glow font-semibold tracking-wide",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-12 rounded-md px-8 text-base",
        xl: "h-14 rounded-md px-10 text-lg",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

const Button = React.forwardRef(({ className, variant, size, ...props }, ref) => {
  return (
    <button
      ref={ref}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
});

Button.displayName = "Button";

export { Button, buttonVariants };
