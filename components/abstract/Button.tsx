import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

/* ----------------------------------------------------------------
   Button variants — defined with CVA so each variant can be
   overridden downstream by passing extra className props or by
   editing the recipe here.

   Variants:
     primary   (default) – navy background, white text
     secondary            – black (#121212) background, white text
     outline              – transparent, navy border
     ghost                – text-only, light navy tint on hover
   ---------------------------------------------------------------- */
const buttonVariants = cva(
    // Base styles shared across all variants
    [
        "inline-flex items-center justify-center gap-2",
        "font-semibold text-sm leading-none tracking-wide",
        "rounded-(--radius)",
        "transition-all duration-200 ease-out",
        "cursor-pointer select-none",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
        "active:scale-[0.97]",
        "disabled:pointer-events-none disabled:opacity-50",
        "whitespace-nowrap",
    ],
    {
        variants: {
            variant: {
                /** Navy — primary brand action */
                primary: [
                    "bg-primary text-primary-foreground",
                    "hover:bg-primary-hover",
                    "shadow-sm hover:shadow-md",
                ],
                /** Black (#121212) — strong secondary CTA */
                secondary: [
                    "bg-secondary text-secondary-foreground",
                    "hover:bg-secondary-hover",
                    "shadow-sm hover:shadow-md",
                ],
                /** Navy border, transparent fill — less prominent action */
                outline: [
                    "bg-transparent text-primary",
                    "border border-primary",
                    "hover:bg-accent hover:text-accent-foreground",
                ],
                /** Text-only — tertiary, sits inside dense layouts */
                ghost: [
                    "bg-transparent text-primary",
                    "hover:bg-accent hover:text-accent-foreground",
                ],
                /** White — for use on dark backgrounds */
                white: [
                    "bg-white text-secondary",
                    "hover:bg-white/90",
                    "shadow-sm hover:shadow-md",
                ],
            },
            size: {
                sm:  "h-8  px-3 text-xs",
                md:  "h-10 px-4 text-sm",
                lg:  "h-11 px-6 text-base",
                xl:  "h-12 px-8 text-base",
                icon: "h-10 w-10 p-0",
            },
        },
        defaultVariants: {
            variant: "primary",
            size: "md",
        },
    }
);

export type ButtonVariants = VariantProps<typeof buttonVariants>;

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
        ButtonVariants {
    /** Render as a different element (e.g. pass asChild patterns manually) */
    as?: React.ElementType;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant, size, as: Comp = "button", ...props }, ref) => {
        return (
            <Comp
                ref={ref}
                className={cn(buttonVariants({ variant, size }), className)}
                {...props}
            />
        );
    }
);
Button.displayName = "Button";

export { Button, buttonVariants };
