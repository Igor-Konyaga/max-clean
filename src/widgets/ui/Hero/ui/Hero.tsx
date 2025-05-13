import { Container } from '@/shared/ui/Container/ui/Container';
import { FC } from 'react';
import styles from './Hero.module.scss';
import { Title } from '@/shared/ui/Title/ui/Title';
import { Text } from '@/shared/ui/Text/ui/Text';

const Hero: FC = () => {
  return (
    <section className={styles.hero}>
      <Container>
        <Title className={styles.title}>
          <span className={styles.accent}>Чистота</span> без зусиль
        </Title>
        <Text className={styles.text}>Довірте хімчистку професіоналам </Text>
      </Container>
    </section>
  );
};
export { Hero };
