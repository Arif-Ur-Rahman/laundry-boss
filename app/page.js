// app/page.js
import Barbar from './components/Barbar';
import ExpertLaundry from './components/expert-laundry';
import Header from './components/header';
import Hero from './components/hero';
import Services from './components/services';

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <Services />
      <Barbar />
      <ExpertLaundry />
    </div>
  );
}