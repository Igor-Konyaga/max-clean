'use client';
import { FC, ReactNode } from 'react';
import { ButtonHTMLAttributes } from 'react';
import { Button } from '../../Button/ui/Button';
import clsx from 'clsx';

type ScrollToButtonProps = {
  targetId: string;
  children: ReactNode;
  className?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const ScrollToButton: FC<ScrollToButtonProps> = ({
  targetId,
  children,
  className,
  ...props
}) => {
  const handleClick = () => {
    const element = document.getElementById(targetId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Button handleClick={handleClick} className={clsx(className)} {...props}>
      {children}
    </Button>
  );
};

export { ScrollToButton };
