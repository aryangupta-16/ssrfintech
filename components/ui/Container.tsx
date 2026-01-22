import { HTMLAttributes } from "react";
import styles from "./Container.module.css";

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  size?: "sm" | "md" | "lg" | "xl";
}

export default function Container({
  className,
  size = "xl",
  children,
  ...props
}: ContainerProps) {
  const containerClasses = [
    styles.container,
    styles[size],
    className
  ].filter(Boolean).join(" ");

  return (
    <div className={containerClasses} {...props}>
      {children}
    </div>
  );
}
