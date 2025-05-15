import { Container } from '@/shared/ui/Container/ui/Container';
import { FC } from 'react';
import styles from './AboutUs.module.scss';
import { Title } from '@/shared/ui/Title/ui/Title';
import { Text } from '@/shared/ui/Text/ui/Text';
import aboutUs from '@/shared/assets/images/aboutUs.png';
import Image from 'next/image';

const AboutUs: FC = () => {
  return (
    <section id="aboutUs" className={styles.aboutUs}>
      <Container>
        <Title className={styles.title} tag="h2">
          Про нас
        </Title>
        <div className={styles.bottomBlock}>
          <Text className={styles.text}>
            <span className={styles.accent}>Max-Clean</span> — професійна
            компанія з хімчистки меблів, прання килимів та прибирання приміщень
            у Дніпрі. Ми працюємо для тих, хто цінує чистоту, комфорт і якість
            обслуговування. Наша команда використовує сучасне обладнання та
            безпечні мийні засоби, щоб досягти ідеального результату без шкоди
            для здоров’я чи поверхонь. Ми дбаємо про кожну деталь і ставимось до
            вашого простору з повагою.
            <span className={styles.accent}>Max-Clean</span> — це надійність,
            відповідальність і чистота, яку видно з першого погляду.
          </Text>
          <Image src={aboutUs} alt="room" />
        </div>
      </Container>
    </section>
  );
};
export { AboutUs };
