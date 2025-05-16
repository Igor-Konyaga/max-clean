import { FC } from 'react';
import styles from './Services.module.scss';
import { Title } from '@/shared/ui/Title/ui/Title';
import { List } from './List/ui/List';

const Services: FC = () => {
  return (
    <section id="services" className={styles.services}>
      <Title className={styles.title} tag="h2">
        Наші послуги
      </Title>
      <List />
    </section>
  );
};
export { Services };
