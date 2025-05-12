import { FC } from 'react';
import styles from './Header.module.scss';
import Link from 'next/link';
import logo from '../../../../../public/Logo.svg';
import Image from 'next/image';
import { NavLinks } from './NavLinks/ui/NavLinks';
import { Container } from '@/shared/ui/Container/ui/Container';

const Header: FC = () => {
  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.wrapperContent}>
          <Link className={styles.logo} href="/">
            <Image width={140} height={70} src={logo} alt="logo" />
          </Link>

          <NavLinks />
        </div>
      </Container>
    </header>
  );
};
export { Header };
