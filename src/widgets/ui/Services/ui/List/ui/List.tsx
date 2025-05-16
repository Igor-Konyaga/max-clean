import { FC } from 'react';
import { services } from '../model/constants';
import { Item } from './Item/ui/Item';
import styles from './List.module.scss';

const List: FC = () => {
  return (
    <ul className={styles.list}>
      {services.map((service) => {
        return <Item key={service.id} service={service} />;
      })}
    </ul>
  );
};

export { List };
