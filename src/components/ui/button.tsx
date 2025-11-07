import React from "react";

type ButtonProps = {
  size?: "sm" | "md" | "lg";
  variant?: string;
  asChild?: boolean;
  className?: string;
  children?: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

/**
 * Simple Button that forwards className to child when asChild is true.
 */
export function Button({ asChild, className = "", children, ...props }: ButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-md transition-colors focus:outline-none";
  const classes = `${base} ${className}`.trim();

  if (asChild && React.isValidElement(children)) {
    // Merge classes with the child element's existing className
    const child = React.cloneElement(children as React.ReactElement, {
      ...children.props,
      className: [children.props.className, classes].filter(Boolean).join(" "),
      ...props,
    });
    return child;
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
