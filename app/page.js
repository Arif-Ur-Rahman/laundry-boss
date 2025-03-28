// app/page.js
import CoverageArea from './components/Area';
import Barbar from './components/Barbar';
import DownloadApp from './components/DownloadApp';
import ExpertLaundry from './components/expert-laundry';
import Header from './components/header';
import Hero from './components/hero';
import Services from './components/services';
import Stores from './components/Stores';

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <Services />
      <Barbar />
      <ExpertLaundry />
      <CoverageArea />
      <Stores />
      <DownloadApp />
    </div>
  );
}