import { FC } from 'react';
import styles from './Advantages.module.scss';
import { Title } from '@/shared/ui/Title/ui/Title';
import { List } from './List/ui/List';

const Advantages: FC = () => {
  return (
    <section id="advantages" className={styles.advantages}>
      <Title className={styles.title} tag="h2">
        Наші переваги
      </Title>
      <List />
    </section>
  );
};
export { Advantages };
