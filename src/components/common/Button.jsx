import { motion } from "framer-motion";

export default function Button({
  children,
  variant = "primary",
  size = "md",
  onClick,
  to,
  className = "",
  ...props
}) {
  const baseStyles =
    "inline-flex items-center justify-center font-medium transition-all duration-300 rounded-lg";

  const variants = {
    primary:
      "bg-button text-button-text hover:bg-button-hover shadow-theme hover:shadow-lg",
    secondary:
      "bg-transparent border-2 border-button text-button hover:bg-button hover:text-button-text",
    accent:
      "bg-accent text-text-primary hover:bg-accent-hover",
    ghost:
      "bg-transparent text-text-primary hover:bg-bg-secondary",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  const combinedClassName = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  if (to) {
    return (
      <motion.a
        href={to}
        className={combinedClassName}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        {...props}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      onClick={onClick}
      className={combinedClassName}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      {...props}
    >
      {children}
    </motion.button>
  );
}
