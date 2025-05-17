import { Header } from '@/widgets/ui/Header/ui/Header';
import { FC } from 'react';
import { Hero } from '@/widgets/ui/Hero/ui/Hero';
import { AboutUs } from '@/widgets/ui/AboutUs/ui/AboutUs';
import { Advantages } from '@/widgets/ui/Advantages/ui/Advantages';
import { Container } from '@/shared/ui/Container/ui/Container';
import { Services } from '@/widgets/ui/Services/ui/Services';
import { Price } from '@/widgets/ui/Price/ui/Price';
import { Gallery } from '@/widgets/ui/Gallery/ui/Gallery';

const Home: FC = () => {
  return (
    <div>
      <Header />
      <main>
        <Container>
          <Hero />
          <AboutUs />
          <Advantages />
          <Services />
          <Price />
          <Gallery />
        </Container>
      </main>
    </div>
  );
};

export default Home;
