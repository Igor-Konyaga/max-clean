import { Header } from '@/widgets/ui/Header/ui/Header';
import { FC } from 'react';
import styles from './Home.module.scss';

const Home: FC = () => {
  return (
    <div className={styles.page}>
      <Header />
    </div>
  );
};

export { Home };
