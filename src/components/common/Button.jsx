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
    "inline-flex items-center justify-center font-medium transition-all duration-300 rounded-lg active:scale-95";

  const variants = {
    primary:
      "bg-button text-button-text hover:bg-button-hover shadow-theme hover:shadow-xl hover:-translate-y-0.5",
    secondary:
      "bg-transparent border-2 border-button text-button hover:bg-button hover:text-button-text hover:shadow-lg",
    accent:
      "bg-accent text-text-primary hover:bg-accent-hover shadow-theme hover:shadow-lg hover:-translate-y-0.5",
    ghost:
      "bg-transparent text-text-primary hover:bg-bg-secondary hover:shadow-sm",
  };

  const sizes = {
    sm: "px-3 sm:px-4 py-2 text-xs sm:text-sm",
    md: "px-4 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base",
    lg: "px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg",
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
