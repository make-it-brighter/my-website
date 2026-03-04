import * as React from "react"

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'outline' | 'ghost'
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = '', variant = 'default', ...props }, ref) => {
    const base = "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 px-4 py-2"
    const variants = {
      default: "bg-neutral-900 text-white hover:bg-neutral-800 dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-200",
      outline: "border border-neutral-200 bg-transparent hover:bg-neutral-100 dark:border-neutral-800 dark:hover:bg-neutral-800",
      ghost: "hover:bg-neutral-100 dark:hover:bg-neutral-800"
    }
    return (
      <button
        className={`${base} ${variants[variant]} ${className}`}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button }
