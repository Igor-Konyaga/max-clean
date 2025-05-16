import { FC } from 'react';
import { Advantage } from '../../../model/types';
import styles from './Item.module.scss';
import clsx from 'clsx';
import { Icon } from '@/shared/ui/Icon/ui/Icon';
import { Title } from '@/shared/ui/Title/ui/Title';
import { Text } from '@/shared/ui/Text/ui/Text';

type ItemProps = {
  advantage: Advantage;
};

const Item: FC<ItemProps> = ({ advantage }) => {
  const { id, title, description, icon } = advantage;

  const isEven = id % 2 === 0;

  return (
    <li className={clsx(styles.item, isEven && styles.evenItem)}>
      <Icon width={240} height={240} name={icon} />
      <Title className={styles.title} tag="h3">
        {title}
      </Title>
      <Text className={styles.description}>{description}</Text>
    </li>
  );
};

export { Item };
