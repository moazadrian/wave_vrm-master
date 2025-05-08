import AvellanasOffer from '../components/AvellanasOffer';
import Footer from '../components/Footer';
import HeroSec from '../components/HeroAvellanas';
import InfoSec from '../components/InfoSec';
import InstagramGrid from '../components/InstagramGrid';
import Navbar from '../components/Navbar';
import ReviewSection from '../components/ReviewSection';

export default function ExploreAvellanas() {
 
  return (
   <>
   <Navbar />
   <HeroSec />
   <InfoSec />
   <AvellanasOffer />
   <ReviewSection />
   <InstagramGrid />
   <Footer />
   </>
  );
}
