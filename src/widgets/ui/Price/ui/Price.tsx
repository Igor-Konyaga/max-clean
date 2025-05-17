import { FC } from 'react';
import styles from './Price.module.scss';
import { Title } from '@/shared/ui/Title/ui/Title';
import { PriceTabs } from './PriceTabs/ui/PriceTabs ';

const Price: FC = () => {
  return (
    <section id="price" className={styles.price}>
      <Title className={styles.title} tag="h2">
        Прайс
      </Title>

      <PriceTabs />
    </section>
  );
};

export { Price };
