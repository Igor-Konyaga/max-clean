import Link from 'next/link';
import { FC, JSX } from 'react';
import styles from './SocialLinks.module.scss';
import clsx from 'clsx';

type SocialLink = {
  href: string;
  icon: JSX.Element;
};

type SocialLinksProps = {
  links: SocialLink[];
  className?: string;
};

const SocialLinks: FC<SocialLinksProps> = ({ links, className }) => {
  return (
    <ul className={clsx(styles.list, className)}>
      {links.map(({ href, icon }) => (
        <li key={href}>
          <Link href={href} target="_blank" rel="noopener noreferrer">
            {icon}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export { SocialLinks };
