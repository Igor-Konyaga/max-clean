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
  width = 24,
  height = 24,
  className,
  ...props
}) => {
  return (
    <svg
      className={clsx(styles.icon, className)}
      width={width}
      height={height}
      aria-hidden="true"
      {...props}
    >
      <use xlinkHref={`/icons/sprite.svg#${name}`} />
    </svg>
  );
};

export { Icon };
