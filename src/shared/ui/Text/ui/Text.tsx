import React, { FC, ReactNode } from 'react';
import styles from './Text.module.scss';
import clsx from 'clsx';

type TextProps = {
  children: ReactNode;
  className?: string;
};

const Text: FC<TextProps> = ({ children, className }) => {
  return <p className={clsx(styles.text, className)}>{children}</p>;
};

export { Text };
