import { forwardRef } from 'react';
import type { HTMLAttributes } from 'react';

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'outlined' | 'glass' | 'flat';
  interactive?: boolean;
}

export const Card = forwardRef<HTMLDivElement, CardProps>(({ 
  variant = 'default', 
  interactive = false, 
  className = '', 
  children, 
  ...props 
}, ref) => {
  const baseClass = "rounded-xl overflow-hidden";
  
  const variantClasses = {
    default: "bg-surface-container-lowest border border-outline-variant/30 shadow-sm",
    outlined: "bg-transparent border border-outline-variant/50",
    glass: "bg-surface/80 backdrop-blur shadow-sm border border-outline-variant/20",
    flat: "bg-surface-container-low"
  };

  const interactiveClasses = interactive 
    ? "transition-all duration-300 hover:shadow-lg hover:-translate-y-1 active:scale-[0.98] cursor-pointer" 
    : "";

  const finalClassName = `${baseClass} ${variantClasses[variant]} ${interactiveClasses} ${className}`.trim().replace(/\s+/g, ' ');

  return (
    <div ref={ref} className={finalClassName} {...props}>
      {children}
    </div>
  );
});

Card.displayName = 'Card';
