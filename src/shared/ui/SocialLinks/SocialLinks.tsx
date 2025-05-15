import Link from 'next/link';
import { FC, JSX } from 'react';
import styles from './SocialLinks.module.scss';
import clsx from 'clsx';
import { Icon } from '../Icon/ui/Icon';

export const socialLinks = [
  {
    href: 'https://www.facebook.com',
    icon: <Icon name="facebook" />,
  },
  { href: 'https://t.me', icon: <Icon name="telegram" /> },
  {
    href: 'https://www.instagram.com',
    icon: <Icon name="instagram" />,
  },
  {
    href: 'https://www.tiktok.com',
    icon: <Icon name="tiktok" />,
  },
  { href: 'https://www.viber.com', icon: <Icon name="viber" /> },
];

type SocialLink = {
  href: string;
  icon: JSX.Element;
};

type SocialLinksProps = {
  links?: SocialLink[];
  className?: string;
};

const SocialLinks: FC<SocialLinksProps> = ({
  links = socialLinks,
  className,
}) => {
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
