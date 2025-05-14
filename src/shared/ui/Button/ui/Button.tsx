'use client';
import { ButtonHTMLAttributes, FC, ReactNode } from 'react';
import styles from './Button.module.scss';
import clsx from 'clsx';

type ButtonProps = {
  children: ReactNode;
  className?: string;
  handleClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button: FC<ButtonProps> = ({
  children,
  className,
  handleClick,
  ...props
}) => {
  const onClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    handleClick?.(e);
    e.currentTarget.blur();
  };
  return (
    <button
      onClick={onClick}
      className={clsx(styles.button, className)}
      {...props}
    >
      {children}
    </button>
  );
};
export { Button };
