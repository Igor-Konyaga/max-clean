import { Container } from '@/shared/ui/Container/ui/Container';
import { FC } from 'react';
import styles from './Hero.module.scss';
import { Title } from '@/shared/ui/Title/ui/Title';
import { Text } from '@/shared/ui/Text/ui/Text';
import { ScrollToButton } from '@/shared/ui/ScrollToButton/ui/ScrollToButton';
import { SocialLinks } from '@/shared/ui/SocialLinks/SocialLinks';
import { Icon } from '@/shared/ui/Icon/ui/Icon';

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

const Hero: FC = () => {
  return (
    <section className={styles.hero}>
      <Container>
        <Title className={styles.title}>
          <span className={styles.accent}>Чистота</span> без зусиль
        </Title>
        <Text className={styles.text}>Довірте хімчистку професіоналам </Text>
        <ScrollToButton className={styles.button} targetId="contacts">
          Замовити
        </ScrollToButton>
        <SocialLinks links={socialLinks} />
      </Container>
    </section>
  );
};
export { Hero };
