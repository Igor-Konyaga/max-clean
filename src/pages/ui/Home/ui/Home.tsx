import { Header } from '@/widgets/ui/Header/ui/Header';
import { FC } from 'react';
import { Hero } from '@/widgets/ui/Hero/ui/Hero';
import { AboutUs } from '@/widgets/ui/AboutUs/ui/AboutUs';

const Home: FC = () => {
  return (
    <div>
      <Header />
      <main>
        <Hero />
        <AboutUs />
      </main>
    </div>
  );
};

export default Home;
