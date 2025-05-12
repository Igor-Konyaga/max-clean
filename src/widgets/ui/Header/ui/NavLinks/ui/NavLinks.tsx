import { FC } from 'react';
import styles from './NavLinks.module.scss';
import { navLinks } from '../model/constants';
import Link from 'next/link';

const NavLinks: FC = () => {
  return (
    <ul className={styles.list}>
      {navLinks.map(({ link, title }) => {
        return (
          <li className={styles.item} key={title}>
            <Link className={styles.link} href={`#${link}`}>
              {title}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export { NavLinks };
