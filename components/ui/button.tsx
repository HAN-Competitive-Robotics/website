import { Button as ButtonPrimitive } from "@base-ui/react/button";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "group/button inline-flex shrink-0 items-center justify-center rounded border border-transparent min-h-12 bg-clip-padding text-[10px] tracking-widest uppercase font-mono whitespace-nowrap transition-all outline-none select-none focus-visible:border-ring focus-visible:ring-1 focus-visible:ring-ring active:translate-y-px disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:opacity-85",
        outline: "border-line-strong bg-transparent text-foreground hover:border-foreground hover:bg-accent hover:text-white",
        secondary: "bg-surface-raised text-foreground border border-line-strong hover:bg-accent hover:text-white",
        ghost: "hover:bg-accent hover:text-white text-foreground",
        destructive: "bg-destructive text-destructive-foreground hover:opacity-85",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "px-6",
        sm: "min-h-9 px-4 text-[9px]",
        lg: "min-h-14 px-8",
        icon: "size-12",
        "icon-xs": "size-6",
        "icon-sm": "size-8",
        "icon-lg": "size-12",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

function Button({
  className,
  variant = "default",
  size = "default",
  ...props
}: ButtonPrimitive.Props & VariantProps<typeof buttonVariants>) {
  return (
    <ButtonPrimitive
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
