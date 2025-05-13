import React, { FC, ReactNode } from 'react';
import styles from './Title.module.scss';
import clsx from 'clsx';

type TitleProps = {
  children: ReactNode;
  tag?: 'h1' | 'h2' | 'h3' | 'h4';
  className?: string;
};

const Title: FC<TitleProps> = ({ children, tag = 'h1', className }) => {
  const Tag = tag;

  return <Tag className={clsx(styles.title, className)}>{children}</Tag>;
};

export { Title };
