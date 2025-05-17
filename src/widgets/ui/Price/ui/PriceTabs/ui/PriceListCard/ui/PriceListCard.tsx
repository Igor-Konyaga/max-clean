import { FC } from 'react';
import styles from './PriceListCard.module.scss';
import { Title } from '@/shared/ui/Title/ui/Title';
import { PriceItem } from '@/widgets/ui/Price/model/types';
import { Item } from './Item/ui/Item';
import clsx from 'clsx';

type PriceListCardProps = {
  title: string;
  data: PriceItem[];
  isEven: boolean;
};

const PriceListCard: FC<PriceListCardProps> = ({ title, data, isEven }) => {
  return (
    <div className={clsx(styles.priceListCard, isEven && styles.evenCard)}>
      <Title className={styles.title}>{title}</Title>
      <ul className={styles.list}>
        {data.map((price) => {
          return <Item key={price.id} data={price} isEven={isEven} />;
        })}
      </ul>
    </div>
  );
};
export { PriceListCard };
