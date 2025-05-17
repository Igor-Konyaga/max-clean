import { FC } from 'react';
import styles from './Gallery.module.scss';
import { Title } from '@/shared/ui/Title/ui/Title';
import sofa1 from '@/shared/assets/images/gallery/sofa1.png';
import sofa2 from '@/shared/assets/images/gallery/sofa2.png';
import sofa3 from '@/shared/assets/images/gallery/sofa3.png';
import sofa4 from '@/shared/assets/images/gallery/sofa4.png';
import carpet1 from '@/shared/assets/images/gallery/carpet1.png';
import Image from 'next/image';

const Gallery: FC = () => {
  return (
    <section id="gallery" className={styles.gallery}>
      <Title className={styles.title} tag="h2">
        Галерея
      </Title>
      <div className={styles.content}>
        <div className={styles.left}>
          <Image className={styles.img} src={sofa1} alt="sofa" />
          <Image className={styles.img} src={sofa2} alt="sofa" />
        </div>
        <div className={styles.center}>
          <Image className={styles.img} src={sofa3} alt="sofa" />
          <Image className={styles.img} src={sofa4} alt="sofa" />
        </div>
        <div className={styles.right}>
          <Image className={styles.img} src={carpet1} alt="carpet" />
        </div>
      </div>
    </section>
  );
};

export { Gallery };
