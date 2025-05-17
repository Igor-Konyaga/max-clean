import { FC } from 'react';
import styles from './Item.module.scss';
import { PriceItem } from '@/widgets/ui/Price/model/types';
import { Text } from '@/shared/ui/Text/ui/Text';
import clsx from 'clsx';

type ItemProps = {
  data: PriceItem;
  isEven: boolean;
};

const Item: FC<ItemProps> = ({ data, isEven }) => {
  const { label, price } = data;
  return (
    <li className={clsx(styles.item, isEven && styles.itemFromEvenCard)}>
      <Text className={styles.label}>{label}</Text>
      <Text className={clsx(styles.price, isEven && styles.greenText)}>
        {price} грн
      </Text>
    </li>
  );
};

export { Item };
