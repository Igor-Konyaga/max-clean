import { FC } from 'react';
import styles from './Hero.module.scss';
import { Title } from '@/shared/ui/Title/ui/Title';
import { Text } from '@/shared/ui/Text/ui/Text';
import { ScrollToButton } from '@/shared/ui/ScrollToButton/ui/ScrollToButton';
import { SocialLinks } from '@/shared/ui/SocialLinks/SocialLinks';
import Link from 'next/link';

const Hero: FC = () => {
  return (
    <section>
      <div className={styles.content}>
        <Title className={styles.title}>
          <span className={styles.accent}>Чистота</span> без зусиль
        </Title>
        <Text className={styles.text}>Довірте хімчистку професіоналам </Text>
        <ScrollToButton className={styles.button} targetId="contacts">
          Замовити
        </ScrollToButton>
        <SocialLinks className={styles.socialLinks} />

        <div className={styles.address}>
          <Link className={styles.link} href="tel:0999999999">
            +380 96 0000 000
          </Link>
          <Link className={styles.link} href="tel:0999999999">
            +380 96 0000 000
          </Link>
          <Link className={styles.link} href="">
            м. Київ вул. шевченка 45
          </Link>
        </div>
      </div>
    </section>
  );
};
export { Hero };
