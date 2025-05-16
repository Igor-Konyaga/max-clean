import { FC } from 'react';
import { Service } from '../../../model/types';
import styles from './Item.module.scss';
import clsx from 'clsx';
import { Title } from '@/shared/ui/Title/ui/Title';
import { Text } from '@/shared/ui/Text/ui/Text';
import Image from 'next/image';

type ItemProps = {
  service: Service;
};

const Item: FC<ItemProps> = ({ service }) => {
  const { id, title, description, img } = service;

  const isEven = id % 2 === 0;

  return (
    <li className={clsx(styles.item, isEven && styles.evenItem)}>
      <div className={styles.content}>
        <Title className={styles.title} tag="h3">
          {title}
        </Title>
        <Text className={styles.description}>{description}</Text>
      </div>
      <div className={styles.wrapperImage}>
        <Image className={styles.image} src={img} alt={title} />
      </div>
    </li>
  );
};

export { Item };
