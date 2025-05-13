import { Header } from '@/widgets/ui/Header/ui/Header';
import { FC } from 'react';
import { Hero } from '@/widgets/ui/Hero/ui/Hero';

const Home: FC = () => {
  return (
    <div>
      <Header />
      <main>
        <Hero />
      </main>
    </div>
  );
};

export default Home;
