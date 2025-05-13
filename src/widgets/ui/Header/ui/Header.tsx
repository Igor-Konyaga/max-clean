import { FC } from 'react';
import styles from './Header.module.scss';
import Link from 'next/link';
import { NavLinks } from './NavLinks/ui/NavLinks';
import { Container } from '@/shared/ui/Container/ui/Container';
import { Icon } from '@/shared/ui/Icon/ui/Icon';

const Header: FC = () => {
  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.wrapperContent}>
          <Link className={styles.logo} href="/">
            <Icon name="logo" width={140} height={70} />
          </Link>

          <NavLinks />
        </div>
      </Container>
    </header>
  );
};
export { Header };
