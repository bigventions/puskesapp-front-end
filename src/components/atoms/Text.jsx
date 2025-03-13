// Import Dependencies
import { twMerge } from "tailwind-merge";

export const Text = ({
  // Props
  children,
  className,
}) => {
  // State

  // Hooks

  // Methods

  // Event Handler

  // Return JSX
  return (
    <p
      className={twMerge('block text-base font-medium text-text', className)}
    >
      {children}
    </p>
  );
};
