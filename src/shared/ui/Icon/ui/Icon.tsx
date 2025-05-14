import React, { FC, SVGAttributes } from 'react';
import clsx from 'clsx';
import styles from './Icon.module.scss';
import { IconName } from '../model/types';

type IconProps = {
  name: IconName;
  width?: number;
  height?: number;
  className?: string;
} & SVGAttributes<SVGElement>;

const Icon: FC<IconProps> = ({
  name,
  width = 60,
  height = 60,
  className,
  ...props
}) => {
  return (
    <svg
      className={clsx(styles.icon, className)}
      width={width}
      height={height}
      {...props}
    >
      <use xlinkHref={`./icons/sprite.svg?v=1#${name}`} />
    </svg>
  );
};

export { Icon };
