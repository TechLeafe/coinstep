import type { ButtonHTMLAttributes, AnchorHTMLAttributes, ReactNode } from 'react'

type Variant = 'primary' | 'secondary' | 'ghost'
type Size = 'sm' | 'md' | 'lg'

interface SharedProps {
  variant?: Variant
  size?: Size
  children: ReactNode
}

function classesFor(variant: Variant, size: Size) {
  const sizeClass = size === 'sm' ? 'btn-sm' : size === 'lg' ? 'btn-lg' : ''
  return `btn btn-${variant} ${sizeClass}`.trim()
}

// Every button and button-styled link in the app renders through
// this component, which only ever emits the shared .btn classes
// from tokens.css — so a palette or radius change there reaches
// every button on every page automatically.

type ButtonProps = SharedProps & ButtonHTMLAttributes<HTMLButtonElement>

export function Button({ variant = 'primary', size = 'md', children, className, ...rest }: ButtonProps) {
  return (
    <button className={[classesFor(variant, size), className].filter(Boolean).join(' ')} {...rest}>
      {children}
    </button>
  )
}

type LinkButtonProps = SharedProps & AnchorHTMLAttributes<HTMLAnchorElement>

export function LinkButton({ variant = 'primary', size = 'md', children, className, ...rest }: LinkButtonProps) {
  return (
    <a className={[classesFor(variant, size), className].filter(Boolean).join(' ')} {...rest}>
      {children}
    </a>
  )
}
