import { FC } from 'react';
import { advantages } from '../model/constants';
import { Item } from './Item/ui/Item';
import styles from './List.module.scss';

const List: FC = () => {
  return (
    <ul className={styles.list}>
      {advantages.map((advantage) => {
        return <Item key={advantage.id} advantage={advantage} />;
      })}
    </ul>
  );
};

export { List };
